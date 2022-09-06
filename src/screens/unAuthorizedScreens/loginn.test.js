import React from 'react';
import {shallow} from 'enzyme';
import LoginScreen from './LoginScreen';

jest.mock('../../context/context', () => ({
  __esModule: true,
}));

const createTestProps = props => ({
  navigation: {
    navigate: jest.fn(),
  },
  ...props,
});

describe('FlatList screen test caes', () => {
  let component;
  let props;
  beforeEach(() => {
    props = createTestProps({});
  });
  
  it('check name input', () => {
    component = shallow(<LoginScreen {...props} />);
    component
      .find('FormInput[testID="fnameInputId"]')
      .simulate('changeText', 'abc');
    expect(
      component.find('FormInput[testID="fnameInputId"]').prop('value'),
    ).toEqual('abc');
  });

  //   it('login check with all data', () => {
  //     const userNameInput = component.findWhere(node => node.prop('testID' == 'userNameTextInput'))
  //     userNameInput.simulate('changeText', 'user')
  //     expect(userNameInput.prop('value').toBe('user'))
  //   })
});
