import React from 'react';
import { shallow, mount } from 'enzyme';
import Form from '../../app/javascript/components/NewCompanyForm';

describe('New Company Form Component', () => {
  describe('When rendering', () => {
    it('renders', () => {
      const wrapper = shallow(<Form />);
      expect(wrapper.exists()).toBe(true);
    });

    it('renders', () => {
      const wrapper = mount(<Form />);
      expect(wrapper.exists()).toBe(true);
    });

    it('renders input components', () => {
      const wrapper = mount(<Form />);
      expect(wrapper.find('input').exists()).toBe(true);
    });

    it('renders one textarea component', () => {
      const wrapper = mount(<Form />);
      expect(wrapper.find('textarea').exists()).toBe(true);
    });

    it('renders one select component', () => {
      const wrapper = mount(<Form />);
      expect(wrapper.find('select').exists()).toBe(true);
    });
  });

  describe('When rendering select component', () => {
    it('renders 50 options for select', () => {
      const wrapper = mount(<Form />);
      expect(wrapper.find('select').children()).toHaveLength(51);
    });
  });
});
