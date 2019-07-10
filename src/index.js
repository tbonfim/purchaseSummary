import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import PurchaseSummaryContainer from './components/PurchaseSummaryContainer';
import { reducer } from './redux/reducer';
import thunk from 'redux-thunk';

import "./styles.scss";

const store = createStore(reducer, applyMiddleware(thunk));

const App = () => {
  return (
    <Provider store={store}>
      <PurchaseSummaryContainer />
    </Provider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
