import {useState} from 'react';

const Section = ({title,desc,isVisible,setIsVisible})=>{
    return(<div className="border border-black p-2 m-2">
        <h3 className="font-bold text-xl">{title}</h3>
        {isVisible ? (<button onClick={()=>setIsVisible(false) } className='cursor-pointer underline'> Hide</button>) :
         (<button onClick={()=>setIsVisible(true)} className='cursor-pointer underline'> Show</button>)}
        {isVisible && <p>{desc}</p>}
        </div>
    )
}

const Instamart = ()=>{
    const [visibleSection,setVisibleSection] = useState("about");
    return (<div>
            <h1 className="text-3xl text-bold p-2 m-2"> Instamart </h1>
           <Section title={'About Instamart'} 
            desc={'Instamart aims to deliver groceries in 15-30 minutes through a network of seller-owned dark stores that emerged from the learnings of Swiggy Stores, a hyperlocal delivery marketplace for groceries and other essentials that shut last year.'}
            isVisible={visibleSection=="about"}
            setIsVisible={()=>setVisibleSection("about")}
            />
            <Section title={'About Instamart Team'} 
            desc={'However, the food delivery business has now grown large enough now to need a CEO, one of the people cited above said. The head of Swiggy Instamart business is Karthik Gurumurthy, Senior Vice President.'}
           isVisible={visibleSection=="team"}
           setIsVisible={()=>setVisibleSection("team")}
           />
             <Section title={'About Instamart Career'} 
            desc={'You can access Instamart in the Swiggy app by clicking on the Instamart tile on the home page of the Swiggy app. Instamart aims to fulfill the unmet grocery needs of its urban customer, at even the odd times of the day. These deliveries are made within less than an hour so that there is no waiting with Instamart.'}
            isVisible={visibleSection=="career"}
            setIsVisible={()=>setVisibleSection("career")}
            />
            <Section title={'Product'} 
            desc={'You can access Instamart in the Swiggy app by clicking on the Instamart tile on the home page of the Swiggy app. Instamart aims to fulfill the unmet grocery needs of its urban customer, at even the odd times of the day. These deliveries are made within less than an hour so that there is no waiting with Instamart.'}
            isVisible={visibleSection=="product"}
            setIsVisible={()=>setVisibleSection("product")}
            />
            <Section title={'Details'} 
            desc={'You can access Instamart in the Swiggy app by clicking on the Instamart tile on the home page of the Swiggy app. Instamart aims to fulfill the unmet grocery needs of its urban customer, at even the odd times of the day. These deliveries are made within less than an hour so that there is no waiting with Instamart.'}
            isVisible={visibleSection=="details"}
            setIsVisible={()=>setVisibleSection("details")}
            />
           
    </div>);
};

export default Instamart;