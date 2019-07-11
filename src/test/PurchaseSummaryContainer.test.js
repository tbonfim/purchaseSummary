import React from 'react';
import { reducer } from '../redux/reducer';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import ReactDOM from 'react-dom';
import PurchaseSummaryContainer from '../components/PurchaseSummaryContainer';
import OrderSummary from '../components/OrderSummary';
import CollapsePanel from '../components/CollapsePanel';

import Enzyme, {mount, act} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';


Enzyme.configure({adapter: new Adapter()});

describe('Testing <PurchaseSummaryContainer />', () => {
  let props;
  const act = jest.fn();
  beforeEach(()=>{

    props = {
      getOrderSummary: ()=>{},
      applyPromo: ()=>{},
      itemDetails: {
        item_name: '',
        quantity: 0,
        price: 0,
        fullPrice: 0,
        image: ''
      },
      pricing: {
        subtotal: 0,
        savings: 0,
        tax: 0,
        total: 100,
        zip: 0
      },
      store: createStore(reducer, applyMiddleware(thunk))
    }
  });

  it('Should render without crashing ', ()=> {
    const div = document.createElement('div');
		ReactDOM.render(<PurchaseSummaryContainer {...props}/>, div);
    ReactDOM.unmountComponentAtNode(div); 
  });

});
