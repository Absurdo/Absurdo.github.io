import { addToCart, updateCart } from "./shoppingCart.js";
import { printCart } from "./templates.js";


function css(element, style) {
  for (const property in style)
      element.style[property] = style[property];
}

const showModal = (nodes) => {
    // get elements from card
    let object = nodes[0].parentNode.dataset['product'];
    object = JSON.parse(object);
    const myfigure = nodes[1].childNodes[1].currentSrc;
    const txt = object['name'];

    const modalContainer = document.getElementById("modal-container");

    const cartIcon = '<span class="material-symbols-outlined">shopping_cart</span>';
    const buyIcon = '<span class="material-symbols-outlined">shopping_bag</span>'

    // create tags
    const modal = document.createElement('div');
    const left = document.createElement('div');
    const right = document.createElement('div');
    const rightTop = document.createElement('div');
    const rigthBotton = document.createElement('div');
    const h3 = document.createElement('h3');
    const p = document.createElement('p');
    const img = document.createElement('img');
    const closeButton = document.createElement('span');
    const addButton = document.createElement('button');
    const buyButton = document.createElement('button');

    // add content to tags
    h3.innerText = "Descripción";
    p.textContent  = txt;
    addButton.innerHTML = cartIcon;
    buyButton.innerHTML = buyIcon;
    //img.setAttribute('src', myfigure);
    closeButton.textContent = 'X';
    css(rigthBotton, {
      'font-variation-settings': "'FILL' 1, 'wght' 700, 'GRAD' 0, 'opsz' 48",
      'color': 'white'
    });
    // For background image
    css(left, {
      'background-image': 'linear-gradient(134deg,rgba(0,0,0,0.4),rgba(255,255,255,0.4)),url("'+myfigure+'")',
      'background-repeat': 'no-repeat',
      'background-clip': 'border-box',
      'background-origin': 'border-box',
      'background-position' : 'center',
      'background-size': 'cover',
    });
    
    // add style to tags
    modal.classList.add('modal');
    right.classList.add('modal-right');
    left.classList.add('modal-left');
    rightTop.classList.add('modal-right-top');
    rigthBotton.classList.add('modal-right-bottom');
    img.classList.add('modal-image');
    p.classList.add('modal-text');
    closeButton.classList.add('close-button');
    addButton.classList.add('add-button');
    buyButton.classList.add('buy-button');

    // append tags to modal
    //left.appendChild(img);
    rightTop.appendChild(p);
    rightTop.appendChild(closeButton);
    rigthBotton.appendChild(buyButton);
    rigthBotton.appendChild(addButton);
    right.appendChild(h3);
    right.appendChild(rightTop);
    right.appendChild(rigthBotton)
    modal.appendChild(left);
    modal.appendChild(right);
    
    // add the modal to the page
    modalContainer.style.display = "block";
    modalContainer.appendChild(modal);

    // modal behavior
    
    const dropdown = document.getElementById("list");
    addButton.onclick = () => { 
      updateCart(addToCart(object)); 
      const list = getCartFromLocalStorage();
      const listCart = list.map((item) => printCart(item));
      const navbarCart = document.getElementById("cart-list");
      navbarCart.innerHTML = listCart.join(" ");
      dropdown.classList.add('visible');
    }
    addButton.onmouseout = () => {
      dropdown.classList.remove('visible')
    }

    buyButton.onclick = () => { location.assign('/thankyou.html') }

    closeButton.onclick = () => { 
      modalContainer.removeChild(modal);
      modalContainer.style.display = "none"; 
    };

    window.onclick = (event) => {
      if (event.target == modalContainer) {
        modalContainer.style.display = "none";
        modalContainer.removeChild(modal)
      }
    }
}

  export default showModal;