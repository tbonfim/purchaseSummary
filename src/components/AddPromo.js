import React from 'react';

class AddPromo extends React.Component {
  constructor() {
    super();
    this.state = {
      promoCode: ''
    };
  }

  handleChange = ({ target }) => {
    this.setState({
      promoCode: target.value
    });
  }

  applyPromo = () => {
    this.props.applyPromo(this.state.promoCode);
    this.setState({ promoCode: '' });
  }

  render () {
    return ( 
      <div className='addPromoContainer'>
        <span>Promo code</span>
        <input type='text' className="promoCodeInput" value={this.state.promoCode} onChange={this.handleChange}/>
        <a className='applyPromoButton' onClick={this.applyPromo}>Apply</a>
      </div>
    );
  }
}

export default AddPromo;