import React from 'react';
import { shallow, mount } from 'enzyme';
import Home from '../../app/javascript/components/Home';

const company = () => ({
  id: Math.floor(Math.random() * 1000),
  name: 'Bluth Corp',
  city: 'Orange County',
  state: 'CA',
  description: "It's all good real estate!",
});

describe('Home Component', () => {
  describe('When rendering', () => {
    it('renders', () => {
      const wrapper = shallow(<Home companies={[]} />);
      expect(wrapper.exists()).toBe(true);
    });

    it('renders one company', () => {
      const wrapper = mount(<Home companies={[company()]} />);
      expect(wrapper.find('li')).toHaveLength(1);
    });

    it('renders multiple company', () => {
      const wrapper = mount(<Home companies={[company(), company()]} />);
      expect(wrapper.find('li')).toHaveLength(2);
    });
  });
});
