import { useSelector, useDispatch } from "react-redux";
import FoodItem from "./FoodItem";
import { clearCart } from "../utils/cartSlice";


const Cart = () =>{
    const cartItems = useSelector(store => store.cart.items);
    const dispatch = useDispatch();
    const handleClearCart = ()=>{ 
        dispatch(clearCart());
    }
    return (
    <div className="text-sm"> cart Items - {cartItems.length}
    <button className="p-2 m-5 bg-red-200 rounded-lg width-2" onClick={()=> handleClearCart()}> Clear Cart</button>
    <div  className="flex">{ cartItems.map((item) => (
        <FoodItem key={item.id} {...item} />
    ))}</div>
    </div>);
};

export default Cart;