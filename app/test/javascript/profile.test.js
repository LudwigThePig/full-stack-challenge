import React from 'react';
import { shallow, mount } from 'enzyme';
import Profile from '../../app/javascript/components/CompanyProfile';

const company = {
  id: 1,
  name: 'Bluth Corp',
  city: 'Orange County',
  state: 'CA',
  description: "It's all good real estate!",
  founded_date: '1994-06-30',
};

const founder = {
  founder: 'George Maharis',
  title: 'Mr. Manager',
  company_id: 1,
};

describe('Company Profile Component', () => {
  describe('When rendering', () => {
    it('renders', () => {
      const wrapper = shallow(<Profile company={company} founders={[founder]} />);
      expect(wrapper.exists()).toBe(true);
    });

    it('renders one company', () => {
      const wrapper = mount(<Profile company={company} founders={[founder]} />);
      expect(wrapper.find('.founders-list').children()).toHaveLength(1);
    });

    it('renders multiple company', () => {
      const wrapper = mount(<Profile company={company} founders={[founder, founder]} />);
      expect(wrapper.find('.founders-list').children()).toHaveLength(2);
    });
  });
});
