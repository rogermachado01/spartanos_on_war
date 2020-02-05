import React from 'react';
import logo from './logo.svg';
import './App.css';
import Main from './views/main.jsx'
import ContextProvider from './components/apiContext/contextProvider.js'

function App() {
  return (
    <ContextProvider>
      <Main/>
    </ContextProvider>
  );
}

export default App;
