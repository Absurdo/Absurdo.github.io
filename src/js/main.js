import showModal  from "./modal.js";
import { templateCard, printCart } from "./templates.js";
import { products, accesories } from "../utils/data.js";
import { updateCart, getCartFromLocalStorage, addToCart } from "./shoppingCart.js";
import { handleArrays } from "../utils/helpers.js"

//print card product
const viewP = products.map((product) => templateCard(product));
const containProducts = document.getElementById("products");
containProducts.innerHTML = viewP.join(" ");

//print card accesories
const viewA = accesories.map((item) => templateCard(item));
const containAccesories = document.getElementById("accesories");
containAccesories.innerHTML = viewA.join(" ");


//show cart list in dropdown at start. The functionality to remove and redraw the list
// is in index.html because globalscope for onclik attribute on button
const list = getCartFromLocalStorage();
const itemsArray = handleArrays(list);
const listCart = itemsArray.map((item) => printCart(item));
const navbarCart = document.getElementById("cart-list");
navbarCart.innerHTML = listCart.join(" ");

//trigger modal
const cards = document.querySelectorAll('.card-trigger');
cards.forEach(element => {
	element.addEventListener('click',  () => showModal(element.childNodes));
})

// add cart item from card
const addToCartButtons = document.querySelectorAll('.add-to-cart');
const dropdown = document.getElementById("list");
addToCartButtons.forEach(element => {
	let myobject = element.dataset['product'];
	myobject = myobject.replaceAll("/","");
	element.addEventListener('click', () => {
		updateCart(addToCart(JSON.parse(myobject)));
		const list = getCartFromLocalStorage();
		const listCart = list.map((item) => printCart(item));
		const navbarCart = document.getElementById("cart-list");
		navbarCart.innerHTML = listCart.join(" ");
		dropdown.classList.add('visible');
	});
	element.addEventListener('mouseleave', () => {dropdown.classList.remove('visible');})
}) 

// add cart item from modal


// Display cart
/*
const showCart = () => {
	const element = document.getElementById('buy-navbar');
	if (!list.length === 0) {
		element.style.display = '';
	} else {
		element.style.display = 'none';
	} 
}*/

// Route to thankyou after navbar buy click
const buy = document.getElementById('buy-navbar');
buy.addEventListener('click', () => {
	location.assign('/thankyou.html');
})


