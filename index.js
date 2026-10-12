import { getCookie } from "./utils/cookie.js"
import { getData } from "./utils/httpReq.js";
import { shortenText } from "./utils/stringFuction.js";

const loginButton = document.getElementById("login");
const dashboardButton = document.getElementById("dashboard");
const mainContent = document.getElementById("products");

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
  } else {
    dashboardButton.style.display = "none";
  }

  const allProducts = await getData("products");
  console.log(allProducts.products);
  showProducts(allProducts.products);
};

document.addEventListener("DOMContentLoaded", init);
