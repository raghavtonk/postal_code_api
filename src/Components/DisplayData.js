import { useEffect, useState } from "react";

const DisplayData = ({pinCode})=>{
    const [displayDataState,setDisplayDataState] =useState({display: "none"});
    useEffect(()=>{
        if(pinCode){
            setDisplayDataState({display:"block"})
        }
    },[pinCode])
    return(
        <div className="secondPage"style={displayDataState}>
            <div className="navDiv">
                <h1>Pincode: {pinCode}</h1>
                <p><strong>Message:</strong> Number of pincode(s) found:</p>
            </div>
        </div>
    )
}
export default DisplayData;


 