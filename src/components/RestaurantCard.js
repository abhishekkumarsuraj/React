import { IMG_CDN_URL } from '../constants';

const RestaurantCard = (props)=>{
    const {cloudinaryImageId,name,cuisines,totalRatingsString} = props.restaurant.data;
    // {console.log(props) }
    
    return (    
     <div className='w-[200px] p-2 m-2 shadow-lg bg-pink-50'>
        <img src={IMG_CDN_URL+ cloudinaryImageId} ></img>
        <h2 className='font-bold text-xl'>{name}</h2>
        <h3>{cuisines.join(', ')}</h3>
        <h4>{totalRatingsString} ratings</h4>
     </div>
    )
};

export default RestaurantCard;