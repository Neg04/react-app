import React from 'react';
import Weather from './Weather';
import './App.css';


function App() {
  return (
    <div className="App">
      <div className='container'>
      <h3 className='text-light mt-4'>Weather App </h3>
      <Weather defaultCity="Berlin" />
      <p className='text-light'>
         This app is <a href='https://github.com/Neg04/react-app.git' target='-blank'>open-sourced</a> on GitHub.
      </p>
      </div>
    </div>
  );
}

export default App;
