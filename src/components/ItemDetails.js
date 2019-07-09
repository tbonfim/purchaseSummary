import React from 'react';

export default ({itemDetails}) => {
  return ( <div className="itemDetails">
    <img src={itemDetails.image} alt={itemDetails.item_name}/>
    <div className="itemInfo">
      <span>{itemDetails.item_name}</span>
      <span className="itemInfo-quantity">Qty: {itemDetails.quantity}</span>
      <span className="itemInfo-price">$ {itemDetails.price}</span>
      <span className="itemInfo-fullPrice">$ {itemDetails.fullPrice}</span>
    </div>
  </div>);
}