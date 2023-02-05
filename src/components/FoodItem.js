import { IMG_CDN_URL } from '../constants';

const FoodItem = ({name, description, cloudinaryImageId, price})=>{
    console.log(name, description, cloudinaryImageId, price );

    return (    
     <div className='w-[200px] p-2 m-2 shadow-lg bg-pink-50'>
        <img src={IMG_CDN_URL+ cloudinaryImageId} ></img>
        <h2 className='font-bold text-xl'>{name}</h2>
        <h3 className=' text-sm'>{description}</h3>
        <h4 className=' text-sm'>{price/100} Rupees</h4>
     </div>
    )
};

export default FoodItem;