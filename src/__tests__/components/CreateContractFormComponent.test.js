import React from 'react';
import { shallow } from 'enzyme';
import { initStore } from '../../Root';
import CreateContractFormComponent from '../../components/CreateContractFormComponent';

describe('<CreateContractFormComponent />', () => {
  describe('render()', () => {
    it('renders the component', () => {
      const handleSubmit = jest.fn();
      const wrapper = shallow(
        <CreateContractFormComponent store={initStore()} handleSubmit={handleSubmit} />
      );
      expect(wrapper).toMatchSnapshot();
    });
  });
});
