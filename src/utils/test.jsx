/* eslint-disable import/no-unresolved */
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { render as rtlRender } from '@testing-library/react';
import rootReducer from 'pages/reducer';

function render(ui, { initialState, store = createStore(rootReducer, initialState) } = {}) {
  return {
    ...rtlRender(<Provider store={store}>{ui}</Provider>),
    // adding `store` to the returned utilities to allow us
    // to reference it in our tests (just try to avoid using
    // this to test implementation details).
    store,
  };
}

export * from '@testing-library/react';
export { render };
