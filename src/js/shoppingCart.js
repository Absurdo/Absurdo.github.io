function handleArrays(x) {
	let helperArray = [];
	if (Array.isArray(x) == false) {
		  helperArray.push(x);
      return helperArray;
	}else{
      return x
  }
}

const shoppingCart = (state = [], action) => {
    switch (action.type) {
      case 'ADD_TO_CART':
        return [...state, action.item];
      case 'REMOVE_FROM_CART':
        return state.filter(item => item.id !== action.id);
      case 'EMPTY_CART':
        return [];
      default:
        return state;
    }
  };
  
  export const addToCart = item => ({
    type: 'ADD_TO_CART',
    item
  });
  
  export const removeFromCart = id => ({
    type: 'REMOVE_FROM_CART',
    id
  });
  
  export const emptyCart = () => ({
    type: 'EMPTY_CART'
  });

  export const getCartFromLocalStorage = () => {
    const cart = localStorage.getItem('cart');
    return cart ? JSON.parse(cart) : [];
  };
  
  export const saveCartToLocalStorage = cart => {
    localStorage.setItem('cart', JSON.stringify(cart));
  };
  
  export const updateCart = action => {
    try {
      let currentCart = getCartFromLocalStorage();
      currentCart = handleArrays(currentCart)
      console.log(currentCart)
      const newCart = shoppingCart(currentCart, action);
      saveCartToLocalStorage(newCart);
    } catch (error) {
      console.error('Error al actualizar el carrito:', error);
    }
  };

  
  