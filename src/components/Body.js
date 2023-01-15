import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";


function filterData(searchInput,restaurants){
    
    const filterData = restaurants.filter(
        (restaurant)=>restaurant?.data?.name?.toLowerCase()?.includes(searchInput.toLowerCase()));
    return filterData;
}

const Body = ()=>{
    const [searchInput, setSearchInput] = useState("Search");
    const [filteredRestaurant, setFilteredRestaurants] = useState([]);
    const [allRestaurants, setAllRestaurants] = useState([]); 
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
             return <RestaurantCard restaurant={restaurant} key={restaurant.data.id}/>
            })}
        </div>
        </>
    );
};

export default Body;