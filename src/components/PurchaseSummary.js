import React from "react";
import OrderSummary from './OrderSummary';
import CollapsePanel from './CollapsePanel';
import ItemDetails from './ItemDetails';
import AddPromo from './AddPromo';

export default class PurchaseSummary extends React.Component {

  componentDidMount() {
    // this.props.getPurchaseSummaryDispatcher();
  }
  render () {


    this.state = {
      pricing: {
        subtotal: 102.96,
        savings: 3.85,
        tax: 8.92,
        total: 108.03,
        zip: 85050
      },
      itemDetails:{
        item_name: "Essentials by OFM ESS-3085 Raving Style Leather Gaming Chair, Red",
        quantity: 1,
        image: "IMAGE URL"
      }
    };

    const {itemDetails, pricing} = this.state;
    
  return( 
      <div className="purchaseSummary-container">
        <OrderSummary orderSummary={pricing}/>
        <CollapsePanel container={<ItemDetails itemDetails={itemDetails}/>}/>
        <CollapsePanel container={<AddPromo />}/>
      </div>
    );
  }
};