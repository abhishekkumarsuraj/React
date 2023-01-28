import Logo from '../assets/img/foodVilla.png'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import useOnline from '../utils/useOnline';

export const Title = ()=> (<a href='/'><img className='logo'
                 alt='logo'
                 src={Logo}></img>
                 </a>);


const Header = ()=>{
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const isOnline = useOnline();
    return(
    <div className='header'>
        <Title/>
        <div className='nav-items'>
        <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About Us</Link></li>
            <li><Link to='/contact'>Contact Us</Link></li>
            <li>Cart</li>
            <li><Link to='/instamart'>Instamart</Link></li>
        </ul>
        </div>
        <h1> { isOnline? "🟢" : "🔴"}</h1>
        {
            isLoggedIn ? <button onClick={()=> setIsLoggedIn(false)}>Logout</button> :
            <button onClick={()=> setIsLoggedIn(true)}>Login</button>
        }
        </div>
    )
};


export default Header;