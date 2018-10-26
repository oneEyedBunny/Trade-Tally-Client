//runs automatically before tests. It sets up an adaptor, which lets Enzyme
//know how to work w/comps made with a specific version of React.

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  clear: jest.fn()
};
global.localStorage = localStorageMock

configure({ adapter: new Adapter() });
