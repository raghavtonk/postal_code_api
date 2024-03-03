import { useState } from 'react';

import LandingPage from './Components/LandingPage';
import DisplayData from './Components/DisplayData'
function App() {
  const [pinCode,setPinCode]= useState("");
 
  function inputChanges(inputValue){
    setPinCode(inputValue)
  }
  console.log(pinCode)
  return (
    <div className="App">
      <LandingPage inputChanges={inputChanges}/>
     <DisplayData  pinCode={pinCode}/>
    </div>
  );
}

export default App;
