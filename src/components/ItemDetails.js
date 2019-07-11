import React from 'react';

export default ({itemDetails}) => {
  return ( <div className="itemDetails">
    <img src={itemDetails.image} alt={itemDetails.item_name}/>
    <div className="itemInfo">
      <span className="itemInfo-description">{itemDetails.item_name}</span>
      <span className="itemInfo-quantity">Qty: {itemDetails.quantity}</span>
      <span className="itemInfo-price">${itemDetails.price.toFixed(2)}</span>
      <span className="itemInfo-fullPrice">${itemDetails.fullPrice.toFixed(2)}</span>
    </div>
  </div>);
}