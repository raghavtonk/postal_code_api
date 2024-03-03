import { useState } from "react";
import { useEffect } from "react";
const LandingPage =({inputChanges})=>{
    const [inputPin,setInputPin]= useState("")
    const [error,setError] = useState("")
    const [displays,setDisplays]= useState({display:"block"})

    useEffect(()=>{
        if(error){
            setTimeout(()=>{
                setError("")
            },2000)
        }
    },[error])
    const inputChange=(event)=>{
        let value = event.target.value;
        if(value.trim()){
            setInputPin(value);
        }
    }
    const buttonHandle=()=>{
        if(inputPin.length === 6 && !isNaN(inputPin)){
            inputChanges(inputPin);
            setDisplays({display:"none"})
        }
        else{
            let errorMsg ="PinCode must have 6 Numbers"
            setError(errorMsg)
        }   
    }
    return(
        <div className="landing-container" style={displays}>
            <h1>Enter PinCode</h1>
            <input type="text" placeholder="Pincode" value={inputPin} onChange={inputChange}></input><br/>
            <button onClick={buttonHandle}>Lookup</button>
            {
                error && <p>{error}</p>
            }
        </div>
    )
}

export default LandingPage;