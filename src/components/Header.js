import Logo from '../assets/img/foodVilla.png'
import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import useOnline from '../utils/useOnline';
import UserContext from '../utils/UserContext';
import { useSelector } from 'react-redux';
// import store from '../utils/store';

export const Title = ()=> (<a href='/'><img data-testid="logo" className='h-28 p-2'
                 alt='logo'
                 src={Logo}></img>
                 </a>);


const Header = ()=>{
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const isOnline = useOnline();
    const  {user} =useContext(UserContext);
    const cartItems = useSelector(store => store.cart.items);
    console.log(cartItems);
    return(
    <div className='flex justify-between bg-pink-50 shadow-lg my-5'>
        <Title/>
        <div className='nav-items'>
        <ul className='flex py-12'>
            <li className='px-2 font-medium'><Link to='/'>Home</Link></li>
            <li className='px-2 font-medium'><Link to='/about'>About Us</Link></li>
            <li className='px-2 font-medium'><Link to='/contact'>Contact Us</Link></li>
            <li className='px-2 font-medium'><Link to='/instamart'>Instamart</Link></li>
            <li className='px-2 font-medium'><Link to='/cart' data-testid="cart">Cart - {cartItems.length} Items</Link></li>
        </ul>
        </div>
        <h1 data-testid="online-status" className='py-12 px-5 '> { isOnline? "🟢 Online" : "🔴 Offline"}</h1>
       <span className='py-12 px-5'>{user.name}</span> 
        {
            isLoggedIn ? <button  className='px-3' onClick={()=> setIsLoggedIn(false)}>Logout</button> :
            <button className='px-3' onClick={()=> setIsLoggedIn(true)}>Login</button>
        }
        </div>
    )
};


export default Header;