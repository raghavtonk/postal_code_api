import { useEffect, useState } from "react";
import { data } from "../data";
import Carts from "./Carts";
import'./DisplayData.scss'
import { getpostOffice } from "./api";
import {getSortedData} from './Sort'


const DisplayData = ({pinCode})=>{
    const [response, setResponse] = useState(null);
    const [error, setError] = useState("");
    const [selectValue,setSelectValue]=useState("Name");
    const [filterResponse,setFilterResponse]=useState(null)
    const [displayDataState,setDisplayDataState] =useState({display: "none"});
    useEffect(()=>{
        if(pinCode){
            setDisplayDataState({display:"block"});
            (async function () {
                const response = await  getpostOffice(pinCode);
                response.status === "success" ? setResponse(response.data) : setError(response.data)
            })();
        }
    },[pinCode])
    if(response!== null){
   
    }
    useEffect(() => {
        if (error) {
            setTimeout(() => setError(""), 3000)
        }
    }, [error])
   const filterHandle=()=>{
        if(response[0].Message !== 'No records found' && response !== null){
           let field =selectValue.trim();
           let  sortedData =null;
           if(filterResponse === null){
                sortedData = [...response];
                setResponse(null)
            }
            else
            sortedData = [...filterResponse];
            sortedData= getSortedData(sortedData,field)
    // Sorting the PostOffice array inside the first element of the data array
    
            console.log(sortedData);
            setFilterResponse(sortedData)
           
        }
   }
   const selectChange=(event)=>{

    setSelectValue(event.target.value)
   }
    return(
        <div className="secondPage"style={displayDataState}>
            <div className="navDiv">
                {response !== null && <h1>Pincode: {pinCode}</h1>}
                {
                response !== null && 
                <section>
                    <label htmlFor="filter">Choose a Filter:</label>
                    <select name="filter" id="cars" onChange={selectChange}>
                        <option value="Name">Name</option>
                        <option value="BranchType">Branch Type</option>
                        <option value="DeliveryStatus">Delivery Status</option>
                        
                    </select>
                    <button onClick={filterHandle}>Filter</button>
                </section>
                }
                {response !== null && <p><strong>Message:</strong> {response[0].Message}</p>}
                <div className="cartsDiv">
                {
                    response !== null && ( response[0].Message !== 'No records found' && filterResponse === null )? (response[0].PostOffice.map((item)=><Carts key={item.Name}cartData={item}/>) ): "" 
                  
                }
                </div>
              
                <div className="cartsDiv">
                {filterResponse !==null &&  filterResponse.map((item)=><Carts key={item.Name}cartData={item}/>) }
                </div>
                {error && <p style={{ color: "red" }}>{error}</p>}
             
            </div>
        </div>
    )
}
export default DisplayData;


 