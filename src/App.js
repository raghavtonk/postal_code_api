import { useState ,useEffect} from 'react';
import {MetroSpinner}from "react-spinners-kit";
import LandingPage from './Components/LandingPage';
import DisplayData from './Components/DisplayData'
function App() {
  const [pinCode,setPinCode]= useState("");
  const [loadDisplay,setloadDisplay] =useState({display:"none"})
 useEffect(()=>{
  if(pinCode){
    setloadDisplay({display:"block"})
    setTimeout(()=>{
      setloadDisplay({display:"none"})
    },1000)
  }
 },[pinCode])
  function inputChanges(inputValue){
    setPinCode(inputValue)
  }
 
  return (
    <div className="App">
      <LandingPage inputChanges={inputChanges}/>
      <div className="spinner"  style={loadDisplay}>
        <MetroSpinner size={40} color="red"/>
      </div>
     <DisplayData  pinCode={pinCode}/>
    </div>
  );
}

export default App;
