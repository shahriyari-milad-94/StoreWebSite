import { getCookie } from "./utils/cookie.js";
import { getData } from "./utils/httpReq.js";
import { shortenText } from "./utils/stringFuction.js";

let allProducts = null;
let search = "";
let category = "all";

const loginButton = document.getElementById("login");
const dashboardButton = document.getElementById("dashboard");
const mainContent = document.getElementById("products");
const searchButton = document.querySelector("button");
const inputBox = document.querySelector("input");
const listItems = document.querySelectorAll("li");

const showProducts = (products) => {
  mainContent.innerHTML = "";

  products.forEach((product) => {
    const jsx = `
    <div>
       <img alt=${product.title} src=${product.images[0]} />

       <h4>${shortenText(product.title)}</h4>

       <div id='price'>
           <p>$ ${product.price}</p>
           <button>
              Buy
             <i class='fa-solid fa-cart-shopping'></i>

           </button>
       </div>

       <div id="rate" >
          <i class='fa-solid fa-star'></i>
          <span>${product.rating}</span>
       </div>

       <div id="count" >
          <i class='fa-solid fa-user'></i>
          <span>${product.minimumOrderQuantity}</span>
       </div>
     

    </div>
    `;

    mainContent.innerHTML += jsx;
  });
};

const init = async () => {
  const cookie = getCookie();

  if (cookie) {
    loginButton.style.display = "none";
    dashboardButton.style.display = "block";
  } else {
    loginButton.style.display = "block";
    dashboardButton.style.display = "none";
  }

  allProducts = await getData("products");
  console.log(allProducts.products);
  showProducts(allProducts.products);
};

const filterProducts = () => {
  const filteredProducts = allProducts.products.filter((product) => {
    if (category === "all") {
      return product.title.toLocaleLowerCase().includes(search);
    } else {
      return (
        product.title.toLocaleLowerCase().includes(search) &&
        product.category.toLocaleLowerCase() === category
      );
    }
  });

  showProducts(filteredProducts);
};

const searchHandler = () => {
  search = inputBox.value.trim().toLowerCase();

  filterProducts();
};

const filterHandler = (event) => {
  category = event.currentTarget.innerText.trim().toLowerCase();

  listItems.forEach((li) => {
    if (li.innerText.toLocaleLowerCase() === category) {
      li.className = "selected";
    } else {
      li.className = "";
    }
  });

  filterProducts();
};

document.addEventListener("DOMContentLoaded", init);
searchButton.addEventListener("click", searchHandler);
listItems.forEach((li) => li.addEventListener("click", filterHandler));
