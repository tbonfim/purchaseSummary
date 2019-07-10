import React from 'react';
import DetailsModal from './DetailsModal';

import { connect } from 'react-redux';

class OrderSummary extends React.Component {
  constructor() {
    super();
    
    this.state = { 
      isOpen : false
    };
  }

  toggleDetailsModal = ()=>{  
    this.setState({ isOpen: !this.state.isOpen});
  }
  render () {
    const {orderSummary} = this.props;
    
    return (
      <div className="orderSummary">
        <div className="orderSummary-subtotal">
          <span>Subtotal:</span>
          <span>{orderSummary.subtotal}</span>
        </div>

        <div className="orderSummary-savings">
          <a href="#" onClick={ this.toggleDetailsModal }>Pickup savings:</a>
          <DetailsModal open={this.state.isOpen}/>
          <span>{orderSummary.savings}</span>
        </div>
          
        <div className="orderSummary-taxes">
          <span>Est. Taxes & Fees <br />(based on {orderSummary.zip}) </span>
          <span>{orderSummary.tax}</span>
        </div>
        
        <div className="orderSummary-total">
          <span>Est. Total</span>
          <span>{orderSummary.total}</span>
        </div>
        
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    orderSummary: state.pricing
  };
}

export default connect(mapStateToProps)(OrderSummary);