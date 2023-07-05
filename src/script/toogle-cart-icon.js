

const openCartIcon = document.querySelector(".user-menu .cart");
const closeCartIcon = document.querySelector(".cart-close-button");
const cartItems = document.querySelector("#cart-items");

const openCartItems = () => {
  cartItems.classList.add("actived");
}

const closeCartItems = () => {
  cartItems.classList.remove("actived");
}

openCartIcon.addEventListener('click', openCartItems);
closeCartIcon.addEventListener('click', closeCartItems);






