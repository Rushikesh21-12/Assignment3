import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';


jest.mock('@react-navigation/native', () => ({
  useIsFocused: jest.fn(),
}));

jest.mock('react', () => ({
  useContext: jest.fn(),
}));

Enzyme.configure({ adapter: new Adapter() });
