import { useContext, useEffect } from "react";
import { AuthContext } from "../ContextApi/AuthProvider";
import HomeCard from "./HomeCard";
import Aos from 'aos';
import 'aos/dist/aos.css';
const Features = () => {
    const{featuredSession} = useContext(AuthContext);
    useEffect(()=>{
      Aos.init()
      },[])
    return (
        <div  className="container pt-20 pb-6 text-center ">
           <p className="text-2xl mb-4 font-bold text-[#f46480]">Buy Tickets Now</p>
           <h2 className="text-5xl font-extrabold text-[#301a52]"> Our Services  </h2>
           <div className="grid md:grid-cols-3 mt-20 mb-10 gap-10">
                {
                  featuredSession.map( services => <HomeCard services ={services} key={services.id}></HomeCard>)
                }
           </div>
        </div>
    );
};

export default Features;