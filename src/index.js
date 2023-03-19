import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/global.scss'
import reportWebVitals from './reportWebVitals';
import StateContextProvider from './context/StateContextProvider';
import ReducerProvider from './context/ReducerProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StateContextProvider>
      <ReducerProvider>
        <App />
      </ReducerProvider>
    </StateContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
