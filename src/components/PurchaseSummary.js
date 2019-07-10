import React from "react";
import OrderSummary from './OrderSummary';
import CollapsePanel from './CollapsePanel';
import ItemDetails from './ItemDetails';
import AddPromo from './AddPromo';

import { connect } from 'react-redux';
import { applyDiscount, getOrderSummary } from '../redux/actions';

class PurchaseSummary extends React.Component {

  componentDidMount() {
    this.props.getOrderSummary();
  }

  applyPromo (promoCode) {
    if(promoCode === 'DISCOUNT'){
      this.props.applyDiscount();
    }
  }
  render () {
    return( 
      <div className='purchaseSummary'>
        <OrderSummary />
        <CollapsePanel container={<ItemDetails itemDetails={this.props.itemDetails}/>}/>
        <CollapsePanel container={<AddPromo applyPromo={this.applyPromo}/>}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(PurchaseSummary);