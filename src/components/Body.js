import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { filterData } from "../utils/helper";
import useRestaurantList from "../utils/useRestaurantList";
import useOnline from "../utils/useOnline";



const Body = ()=>{
    const [searchInput, setSearchInput] = useState("Search");
    const [filteredRestaurant, setFilteredRestaurants] = useState([]);
    const [allRestaurants, setAllRestaurants] = useState([]); 

    // const restaurantList = useRestaurantList();
    //     setAllRestaurants(restaurantList)
    //     setFilteredRestaurants(restaurantList);

    useEffect(()=>{
      getRestaurants();
    }, []);

    async function getRestaurants(){
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.029462&lng=80.161667&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        console.log(json?.data?.cards[2]?.data?.data?.cards)
        setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards)
        setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    }

    // const online = useOnline();

    // if(!online) {
    //     return <h1>🛑Offline, Please check your internet connection!!!</h1>
    // }

    if(filteredRestaurant?.length === 0 && allRestaurants!= 0){
        return <h1>No Restaurant found ....</h1>;
    }

    return allRestaurants?.length === 0 ? (<Shimmer/>):(
        <>
         <div className="search-container">
                <input type="text" className="search-input" 
                placeholder="search" value={searchInput}
                onChange={(e)=>{ setSearchInput(e.target.value)}}></input>
                <button className="submit-btn"
                onClick={()=>{
                    //need to filter the data
                    const data = filterData(searchInput,allRestaurants);
                    //update the state - restaurants
                    setFilteredRestaurants(data);
                }}>Submit</button>
         </div>
        <div className='restaurant-list'>
            {filteredRestaurant.map((restaurant)=>{
             return <Link to={"/resuarant/"+restaurant.data.id} key={restaurant.data.id} >
                <RestaurantCard restaurant={restaurant} /></Link>
            })}
        </div>
        </>
    );
};

export default Body;