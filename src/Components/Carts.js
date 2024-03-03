import './carts.scss';
const Carts =({cartData})=>{
    return(
        <div className="cart-container">
            <p>Name: <span>{cartData.Name}</span></p>
            <p>Branch Type: <span>{cartData.BranchType}</span> </p>
            <p>Delivery Status: <span>{cartData.DeliveryStatus}</span></p>
            <p>District: <span>{cartData.District}</span></p>
            <p>State: <span>{cartData.State}</span></p>
        </div>
    )
}
export default Carts;