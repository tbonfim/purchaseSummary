import React from 'react';
import CollapsePanel from '../components/CollapsePanel';

import Enzyme, {shallow, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({adapter: new Adapter()});

describe('Testing <CollapsePanel />', () => {
  it('Should not have any content if not expanded', () => {
    const wrapper = shallow(<CollapsePanel />);
    const content = wrapper.find('.collapseContent');
    expect(content).toHaveLength(0);
  });

  it('Should have content if expanded', () => {
    const wrapper = mount(<CollapsePanel />);
    const header = wrapper.find('.collapseHeader');
    header.simulate('click');
    const content = wrapper.find('.collapseContent');
    expect(content).toHaveLength(1);
  });

  it('Should have no content if clicked twice', () => {
    const wrapper = mount(<CollapsePanel />);
    const header = wrapper.find('.collapseHeader');
    header.simulate('click');
    header.simulate('click');
    const content = wrapper.find('.collapseContent');
    expect(content).toHaveLength(0);
  });
});