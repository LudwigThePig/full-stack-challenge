import Enzyme from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new EnzymeAdapter() });

test('the truth', () => {
  expect(true).toBe(true);
});

Enzyme.configure({ adapter: new EnzymeAdapter() });
