import React from 'react';
import {shallow, configure} from 'enzyme';

import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga'
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});
import App from '../App';

import reducers from '../../reducers';
import rootSaga from '../../sagas';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
    reducers,
    applyMiddleware(sagaMiddleware)
)
sagaMiddleware.run(rootSaga);

it('renders without crashing', () => {
  const el = shallow(<Provider store={store}><App /></Provider>);
  expect(el.children()).toHaveLength(1)
});
