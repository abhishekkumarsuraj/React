import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { filterData } from "../utils/helper";
import useRestaurantList from "../utils/useRestaurantList";
import useOnline from "../utils/useOnline";
import { FETCH_RESTAURANT_LIST } from "../constants";


const Body = ()=>{
    const [searchInput, setSearchInput] = useState("");
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
            FETCH_RESTAURANT_LIST);
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
         <div data-testid="search-btn" className=" bg-pink-50 m-3 rounded-lg">
                <input  data-testid='search-input' type="text" className="hover:bg-green-100" 
                placeholder=" search " value={searchInput}
                onChange={(e)=>{ setSearchInput(e.target.value)}}></input>
                <button className="p-2 m-2 bg-purple-700 hover:bg-purple-900 text-white rounded-lg"
                onClick={()=>{
                    //need to filter the data
                    const data = filterData(searchInput,allRestaurants);
                    //update the state - restaurants
                    setFilteredRestaurants(data);
                }}>Submit</button>
         </div>
        <div className='flex flex-wrap' data-testid='res-list'>
            {filteredRestaurant.map((restaurant)=>{
             return <Link to={"/resuarant/"+restaurant.data.id} key={restaurant.data.id} >
                <RestaurantCard restaurant={restaurant} /></Link>
            })}
        </div>
        </>
    );
};

export default Body;