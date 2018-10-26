import React from 'react';
import ReactDOM from 'react-dom';

import {shallow} from 'enzyme';
import configure from './setUpTests'

import store from './store';
import {Provider} from 'react-redux';
import App from './App';

describe('App', () => {
  it('Renders without crashing', () => {
    shallow(
    <Provider store={store}>
      <App />
    </Provider>
    )
  })
})




// it('Renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });
