import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Provider, connect } from 'react-redux'
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker'
import { createStore } from 'redux'
import reducer from './reducers'

// const store = createStore(reducer);

ReactDOM.render(
  <BrowserRouter>
    {/* <Provider store={store}> */}
    <App />
    {/*  </Provider> */}
  </BrowserRouter>
  , document.getElementById('root'))
registerServiceWorker()
