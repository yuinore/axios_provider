import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import AxiosProvider from './components/AxiosProvider'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <AxiosProvider>
      <App />
    </AxiosProvider>
  </React.StrictMode>
);
