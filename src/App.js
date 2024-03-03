import { useState } from 'react';

import LandingPage from './Components/LandingPage';

function App() {
  const [pinCode,setPinCode]= useState("");
  function inputChanges(inputValue){
    setPinCode(inputValue)
  }
  console.log(pinCode)
  return (
    <div className="App">
      <LandingPage inputChanges={inputChanges}/>
     
    </div>
  );
}

export default App;
