import { IMG_CDN_URL } from '../constants';

const RestaurantCard = (props)=>{
    const {cloudinaryImageId,name,cuisines,totalRatingsString} = props.restaurant.data;
    // {console.log(props) }
    
    return (    
     <div className='card'>
        <img src={IMG_CDN_URL+ cloudinaryImageId} ></img>
        <h2>{name}</h2>
        <h3>{cuisines.join(', ')}</h3>
        <h4>{totalRatingsString} ratings</h4>
     </div>
    )
};

export default RestaurantCard;