import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../constants.js";
import useRestaurant from "../utils/useRestaurant.js";
import Shimmer from "./Shimmer.js";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";


const RestaurantMenu = () =>{

   const {resId} = useParams(); 
   
   const restaurant = useRestaurant(resId);
   const dispatch = useDispatch();
   const addFoodItem = (item) => {
    dispatch(addItem(item));
  };

    return !restaurant ? <Shimmer/> : (<div className="flex  bg-pink-50 shadow-lg my-5">
        <div>
        <h1 className="px-2 text-xl font-medium">Restaurant id: {restaurant?.id}</h1>
        <h2 className="px-2 text-xl font-medium">{restaurant?.data?.name}</h2>
        <img className="px-2" src= {IMG_CDN_URL + restaurant?.cloudinaryImageId} />
        <h3 className="px-2 text-xl font-medium">{restaurant?.area}</h3>
        <h3 className="px-2 text-xl font-medium">{restaurant?.city}</h3>
        <h3 className="px-2 text-xl font-medium">{restaurant?.avgRating} stars</h3>
        <h3 className="px-2 text-xl font-medium">{restaurant?.costForTwoMsg}</h3>
        </div>
        <div>
        <h1 className="text-xl px-6 font-bold">Menu</h1>
        <ul>
          {Object.values(restaurant?.menu?.items).map((item) => (
            <li className="italic px-6" key={item.id}>{item.name} <button className="p-1 m-1 bg-violet-200 rounded-lg" onClick={() => addFoodItem(item)}>Add</button></li>
          ))}
        </ul>
      </div>
        
    </div>)
};

export default RestaurantMenu;