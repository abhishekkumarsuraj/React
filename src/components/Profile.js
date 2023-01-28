import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Profile = ()=>{

    const [user, setUser] = useState(null);

    useEffect(()=>{
        getUser();
    },[]);

    async function getUser(){
     
        const data = await fetch("https://api.github.com/users/abhisheksuraj");
        const json = await data.json();
        setUser(json);
        console.log(json);

    }



    return !user ? <Shimmer/>:(<div>
        <img src={user?.avatar_url} />
        <h2> Name : {user?.login} </h2>
        <h3> Url : {user?.url} </h3>
        </div>);
};

export default Profile;