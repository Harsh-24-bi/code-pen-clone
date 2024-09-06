import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {Route, BrowserRouter as Router} from 'react-router-dom'
import { Provider } from 'react-redux'
import Store from './context/store.js'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={Store}>
    <Router>
    <App />
    </Router>
    </Provider>
  </React.StrictMode>,
)
