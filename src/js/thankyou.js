import { updateCart, emptyCart } from "./shoppingCart.js";


const comeback = document.getElementById('comeback');
comeback.addEventListener('click', () => {
	location.assign('/');
})

updateCart(emptyCart());