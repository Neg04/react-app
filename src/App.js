import React from 'react';
import Weather from './Weather';
import './App.css';


function App() {
  return (
    <div className="App">
      <div className='container'>
      Weather App
      <Weather defaultCity="Berlin" />
      <p className='text-light'>
         This app is <a href='https://github.com/Neg04/react-app.git'>open-sourced</a> on GitHub.
      </p>
      </div>
    </div>
  );
}

export default App;
