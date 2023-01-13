import showModal  from "./modal.js";
import { templateCard, printCart } from "./templates.js";
import { products, accesories } from "../utils/data.js";
import { updateCart, getCartFromLocalStorage, addToCart, removeFromCart } from "./shoppingCart.js";

//document.addEventListener('DOMContentLoaded', () => {window.scrollTo(0,0)});

//print card product
const viewP = products.map((product) => templateCard(product));
const containProducts = document.getElementById("products");
containProducts.innerHTML = viewP.join(" ");

//print card accesories
const viewA = accesories.map((item) => templateCard(item));
const containAccesories = document.getElementById("accesories");
containAccesories.innerHTML = viewA.join(" ");

//get cards and event for modal
const cards = document.querySelectorAll('.card-trigger')
cards.forEach(element => {
	element.addEventListener('click',  () => showModal(element.childNodes));
})

// Display cart
/*
const showCart = () => {
	const list = getCartFromLocalStorage();
	const listCart = list.map((item) => printCart(item));
	const navbarCart = document.getElementById("cart-list");
	navbarCart.innerHTML = listCart.join(" ");
	// Conditional show buy button in navbar if elements in cart
	const element = document.getElementById('buy-navbar');
	if (!list.length === 0) {
		element.style.display = '';
	} else {
		element.style.display = 'none';
	} 
}*/



const list = getCartFromLocalStorage();
const listCart = list.map((item) => printCart(item));
const navbarCart = document.getElementById("cart-list");
navbarCart.innerHTML = listCart.join(" ");


// add cart item from card
const addToCartButtons = document.querySelectorAll('.add-to-cart');
addToCartButtons.forEach(element => {
	let myobject = element.dataset['product'];
	myobject = myobject.replaceAll("/","")
	element.addEventListener('click', () => {
		updateCart(addToCart(JSON.parse(myobject)))
		const list = getCartFromLocalStorage();
		const listCart = list.map((item) => printCart(item));
		const navbarCart = document.getElementById("cart-list");
		navbarCart.innerHTML = listCart.join(" ");
	});
}) 


// add cart item from modal
const addToCartButtonsModal = document.querySelectorAll('.add');
addToCartButtonsModal.forEach(element => {
	const myobject = JSON.parse(element.id);
	element.addEventListener('click', () => updateCart(addToCart(myobject)));
	const list = getCartFromLocalStorage();
	const listCart = list.map((item) => printCart(item));
	const navbarCart = document.getElementById("cart-list");
	navbarCart.innerHTML = listCart.join(" ");
}) 


// remove cart item from navbar
const removeItem = () => {
	const removeFromCartButtons = document.querySelectorAll('.remove-item-navbar');
	removeFromCartButtons.forEach(element => {
		const idSplit = element.id.split('-');
		element.addEventListener('click', () => {
			console.log(idSplit);
			updateCart(removeFromCart(idSplit[1]));
			const list = getCartFromLocalStorage();
			const listCart = list.map((item) => printCart(item));
			const navbarCart = document.getElementById("cart-list");
			navbarCart.innerHTML = listCart.join(" ");
		})
	}) 
}

//removeItem();


// Route to thankyou after navbar buy click
const buy = document.getElementById('buy-navbar');
buy.addEventListener('click', () => {
	location.assign('/thankyou.html');
})

// Cut the item name in navbar list
const paragraphs = document.getElementsByClassName('title__item');
for (const paragraph of paragraphs) {
	const fullText = paragraph.textContent;
    const shortText = fullText.substring(0, 15);
    paragraph.textContent = shortText;
}



