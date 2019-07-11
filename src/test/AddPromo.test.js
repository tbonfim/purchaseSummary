import React from 'react';
import AddPromo from '../components/AddPromo';

import Enzyme, {shallow, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({adapter: new Adapter()});

describe('Testing <AddPromo />', () => {
  let applyPromo ;
  beforeEach(()=>{
    applyPromo = jest.fn();
  });

  it('Should render add promo form ', ()=> {
    const wrapper = shallow(<AddPromo applyPromo={applyPromo}/>);
    expect(wrapper.find('.addPromoContainer')).toHaveLength(1);
    expect(wrapper.find('.promoCodeInput')).toHaveLength(1);
    expect(wrapper.find('.applyPromoButton')).toHaveLength(1);
  });

  it('Should call applyPromo function when apply button clicked', () => {
    const wrapper = mount(<AddPromo applyPromo={applyPromo}/>);
    const applyPromoButton = wrapper.find('.applyPromoButton');
    applyPromoButton.simulate('click');
    expect(applyPromo).toHaveBeenCalled();
  });
  
  it('Should call applyPromo function with the correct promocode when apply button clicked', () => {
    const wrapper = mount(<AddPromo applyPromo={applyPromo}/>);
    const applyPromoButton = wrapper.find('.applyPromoButton');
    const promoCodeInput = wrapper.find('.promoCodeInput');
    promoCodeInput.simulate('change', { target: { value: 'Test' } });
    applyPromoButton.simulate('click');
    expect(applyPromo).toHaveBeenCalledWith('Test');
  });
});