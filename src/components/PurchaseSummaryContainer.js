import React from "react";
import OrderSummary from './OrderSummary';
import CollapsePanel from './CollapsePanel';
import ItemDetails from './ItemDetails';
import AddPromo from './AddPromo';

import { connect } from 'react-redux';
import { applyDiscount, getOrderSummary } from '../redux/actions';

class PurchaseSummaryContainer extends React.Component {

  componentDidMount() {
    this.props.getOrderSummary();
  }

  applyPromo = (promoCode) => {
    if(promoCode === 'DISCOUNT'){
      this.props.applyDiscount();
    }
  }
  render () {
    return( 
      <div className='purchaseSummary boxShadow'>
        <OrderSummary orderSummary={this.props.pricing}/>
        <CollapsePanel openText='Hide Item Details' closedText='Show Item Details' component={<ItemDetails itemDetails={this.props.itemDetails}/>}/>
        <CollapsePanel openText='Hide Promo Code' closedText='Apply Promo Code' component={<AddPromo applyPromo={this.applyPromo}/>}/>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    itemDetails: state.itemDetails,
    pricing: state.pricing
  };
}
const mapDispatchToProps = {
  applyDiscount,
  getOrderSummary
};

export default connect(mapStateToProps, mapDispatchToProps)(PurchaseSummaryContainer);