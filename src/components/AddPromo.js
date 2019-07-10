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
  }

  render () {
    return ( 
      <div className='addPromoContainer'>
        <span>Promo code</span>
        <fieldset>
          <input type='text' className="promoCodeInput" value={this.state.promoCode} onChange={this.handleChange}/>
          <a className='applyPromoButton' onClick={this.applyPromo}>Apply</a>
        </fieldset>
      </div>
    );
  }
}

export default AddPromo;