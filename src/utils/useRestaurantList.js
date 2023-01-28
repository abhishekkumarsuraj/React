import { useState, useEffect } from "react";
import { FETCH_RESTAURANT_LIST } from '../constants'

const useRestaurantList = ()=>{

    const [allRestaurants , setAllRestaurants] = useState(null);

    useEffect(()=>{
        getRestaurants();
      }, []);
  
      async function getRestaurants(){
          const data = await fetch(FETCH_RESTAURANT_LIST);
          const json = await data.json();
          setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
      }


      return  allRestaurants;


};

export default useRestaurantList;