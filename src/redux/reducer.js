const initialState = {
  pricing: {
    subtotal: 0,
    savings: 0,
    tax: 0,
    total: 0,
    zip: 0
  },
  itemDetails:{
    item_name: '',
    quantity: 0,
    price: 0,
    fullPrice: 0,
    image: ''
  }
};

export const reducer = (state = initialState, action) =>{
  let updatedState = {...state};
  let newPricing = {...state.pricing};
  
  switch(action.type) {
    case 'APPLY_DISCOUNT':
      newPricing.total *= 0.9;
      updatedState.pricing = newPricing
      return updatedState;
    case 'GET_ORDER_SUMMARY':
      updatedState = action.orderSummary;
      return updatedState;
    default:
      return state;
  }
}