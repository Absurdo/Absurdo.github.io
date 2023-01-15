//import { getCartFromLocalStorage, removeFromCart, updateCart } from "./shoppingCart.js"; 

export const templateCard = (product) => {
	return `
        <div class="card" id="${product.id}">
                <div class="card-trigger" data-product='${JSON.stringify(product)}'> 
                    <figure class="containImg">
                        <img src="./src/img/notebook/${product.url}" alt="" class="imgCard">
                    </figure>
                </div>
                <div class="right-card">
                    <h2 class="nameProduct">${product.name}</h2>
                    <div class="bottom-card">
                        <p class="price">$ ${product.price}</p>
                        <button class="buy add-to-cart" data-product='${JSON.stringify(product)}' autofocus><span class="material-symbols-outlined">shopping_cart</span></button>
                    </div>
                </div>
        </div>
    `;
};


export const printCart = (cartItem) => {
    return `
    <div class="list__item">
        <figure>
            <img class="img__item" src="./src/img/notebook/${cartItem.url}" alt="">
        </figure>
        <p class="title-item">${cartItem.name}</p>
        <button class="remove-item-navbar" id="remove-${cartItem.id}" onclick='removeItem(${JSON.stringify(cartItem)})'> 
             X
        </button>
    </div>
`;
}

/*
function removeItem() {
	const removeFromCartButtons = document.querySelectorAll('.remove-item-navbar');
	removeFromCartButtons.forEach(element => {
		const idSplit = element.id.split('-');
		element.addEventListener('click', () => {
			console.log(idSplit);
			updateCart(removeFromCart(idSplit[1]));
			const list = getCartFromLocalStorage();
			const listCart = list.map((item) => printCart(item));
			const navbarCart = document.getElementById('cart-list');
			navbarCart.innerHTML = listCart.join(' ');
		})
	}) 
}
*/
