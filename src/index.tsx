import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import loadModules from './load-modules';

const [ ROOT, HEAD ] = [ document.getElementById('root'), document.head ];

loadModules( HEAD );

ReactDOM.createRoot(ROOT as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)