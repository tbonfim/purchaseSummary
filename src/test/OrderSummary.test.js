import React from 'react';
import OrderSummary from '../components/OrderSummary';

import Enzyme, {shallow, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({adapter: new Adapter()});

describe('Testing <OrderSummary />', () => {
  let orderSummary;
  beforeEach(()=>{
    orderSummary = {
      subtotal: 0,
      savings: 0,
      tax: 0,
      total: 0,
      zip: 0
    }
  });

  it('Should render all sections ', ()=> {
    const wrapper = shallow(<OrderSummary orderSummary={orderSummary}/>);
    expect(wrapper.find('.orderSummary-subtotal')).toHaveLength(1);
    expect(wrapper.find('.orderSummary-savings')).toHaveLength(1);
    expect(wrapper.find('.orderSummary-taxes')).toHaveLength(1);
    expect(wrapper.find('.orderSummary-total')).toHaveLength(1);
  });

  it('Should not show Details model if not clicked ', () => {
    const wrapper = mount(<OrderSummary orderSummary={orderSummary}/>);
    const detailsModal = wrapper.find('.detailsModal');
    expect(detailsModal).toHaveLength(0);
    const hiddenDetailsModal = wrapper.find('.detailsModal-hidden');
    expect(hiddenDetailsModal).toHaveLength(1);
  });

  it('Should show Details model if clicked ', () => {
    const wrapper = mount(<OrderSummary orderSummary={orderSummary}/>);
    const link = wrapper.find('.orderSummary-savings a');
    link.simulate('click');
    const detailsModal = wrapper.find('.detailsModal');
    expect(detailsModal).toHaveLength(1);
    const hiddenDetailsModal = wrapper.find('.detailsModal-hidden');
    expect(hiddenDetailsModal).toHaveLength(0);
  });

});