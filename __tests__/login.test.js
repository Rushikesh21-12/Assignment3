import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import LoginScreen from '../src/screens/unAuthorizedScreens/LoginScreen';
import { NavigationContainer } from '@react-navigation/native';
import { Text } from 'react-native';

configure({adapter: new Adapter()});

// const createTestProps = (props: Object) => ({
//     navigation: {
//         navigate: jest.fn()
//     },
//     ...props
// });

jest.mock('@react-navigation/native', () => ({
  useIsFocused: jest.fn(),
}));

describe('Test case for testing login', () => {
  // let props:any;
  // let wrapper: any;
  // beforeEach(() => {
  //     // props = createTestProps({});
  //     wrapper = render(
  //         <NavigationContainer>
  //             <LoginScreen navigation={undefined} route={undefined}/>
  //         </NavigationContainer>
  //     );
  //     console.log('before', wrapper.debug());
  // });

  test('username check', () => {
    const wrapper = shallow(<LoginScreen/>);
    console.log('wrapper', wrapper.debug());
    expect(wrapper.find('LoginScreen').text()).toEqual('<LoginScreen />');
    // expect(wrapper.find('ThemeProvider').props('value')).toEqual('Enter your password');
    // expect(wrapper.find('Text[testId="abc"]').text()).toEqual('a');
    // // wrapper.find('TextInputs[title="Username"]').prop('value');
    // expect(wrapper.state('userData.userName')).toEqual('abc');
  });
  // it('password check',() => {
  //     const wrapper = shallow(<LoginScreen navigation={undefined} route={undefined}/>);
  //     wrapper.find('input[title="password"]').simulate('changeText', {target: {value: 'abc'}});
  //     expect(wrapper.state('userData.password')).toEqual('abc');
  // });
  // it('login check with right data',()=>{
  //     const wrapper = shallow(<LoginScreen navigation={undefined} route={undefined}/>);
  //     wrapper.find('TextInputs[title="Username"]').simulate('changeText', 'test111@gmail.com');
  //     wrapper.find('TextInputs[title="Password"]').simulate('changeText', 'Tatva@123');
  //     wrapper.find('CustomButton').simulate('press');
  //     expect(token).not.toBe(undefined);
  // });
  // it('login check with wrong data',()=>{
  //     let token:string;
  //     AsyncStorage.getItem('token').then(res => token = res);
  //     const wrapper = shallow(<LoginScreen navigation={undefined} route={undefined}/>);
  //     wrapper.find('TextInputs[title="Username"]').simulate('changeText', 'abcde');
  //     wrapper.find('TextInputs[title="Password"]').simulate('changeText', 'abcde');
  //     wrapper.find('CustomButton').simulate('press');
  //     expect(token).toEqual(undefined);
  // });
});
