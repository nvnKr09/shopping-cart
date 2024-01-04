const cartReducer = (state = {cart:[]}, action) => {
    switch (action.type) {
      case 'ADD_TO_CART':
        const {cart} = state;
        if (cart.length === 0) {
          cart.push(action.payload);
          return{...state, cart}
        } else{
          const isAvailable = cart.find(item => item.id === action.payload.id)
          return isAvailable ? state : {...state, cart:[...cart, action.payload]}
        }
      case 'REMOVE_FROM_CART':
        const newCart = state.cart.filter((item) => item.id !== action.payload.id)
        return {...state, cart:newCart};
      case 'CHECKOUT':
          // Handle checkout clear the cart
          return {...state, cart:[]};
      default:
        return state;
    }
  };
  
  export default cartReducer;
  