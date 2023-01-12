import { addToCart, updateCart } from "./shoppingCart.js"

const modalContainer = document.getElementById('modal-container');

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
    
    const cartIcon = '<span class="material-symbols-outlined">shopping_cart</span>';
    const buyIcon = '<span class="material-symbols-outlined">shopping_bag</span>'

    // create tags
    const modal = document.createElement('div');
    const left = document.createElement('div');
    const right = document.createElement('div');
    const rightTop = document.createElement('div');
    const rigthBotton = document.createElement('div');
    const h3 = document.createElement('h3');
    const descripcion = document.createElement('div');
    const p = document.createElement('p');
    const img = document.createElement('img');
    const closeButton = document.createElement('button');
    const addButton = document.createElement('button');
    const buyButton = document.createElement('button');

    // add content to tags
    h3.innerHTML = "Descripción";
    p.innerText = txt;
    addButton.innerHTML = cartIcon;
    buyButton.innerHTML = buyIcon;
    //img.setAttribute('src', myfigure);
    closeButton.textContent = 'Close';
    css(rigthBotton, {
      'font-variation-settings': "'FILL' 1, 'wght' 700, 'GRAD' 0, 'opsz' 48",
      'color': 'white'
    });
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
    rigthBotton.appendChild(addButton);
    rigthBotton.appendChild(buyButton);
    right.appendChild(h3);
    right.appendChild(rightTop);
    right.appendChild(rigthBotton)
    modal.appendChild(left);
    modal.appendChild(right);
    
    // add the modal to the page
    modalContainer.appendChild(modal);

    // modal behavior
    closeButton.addEventListener('click', () => { modalContainer.removeChild(modal) });
    addButton.onclick = () => { updateCart(addToCart(object)) }
    buyButton.onclick = () => { location.assign('/thankyou.html') }
    
  }

  export default showModal;