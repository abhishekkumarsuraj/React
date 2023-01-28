import { useState, useEffect } from "react";
import { FETCH_MENU_URL } from "../constants";

const useRestaurant = (resId) =>{
const [restaurant , setRestaurant] = useState(null);

useEffect(()=>{
    getRestaurantInfo();
},[])

async function getRestaurantInfo(){
    const  restaurantInfo = await 
    fetch(FETCH_MENU_URL+resId);
    const json = await restaurantInfo.json();
    setRestaurant(json?.data);
}

return restaurant;
};

export default useRestaurant;