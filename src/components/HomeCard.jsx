import { PropTypes } from "prop-types";
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import { Link } from "react-router-dom";
const HomeCard = ({services}) => {
    const {id,image,title,description,price} =  services;
  
   
    // for animaton aos

    useEffect(()=>{
      Aos.init()
     },[])
    return (
       <div data-aos="fade-up">
         <div className="card card-compact h-full  bg-base-100 shadow-xl">
        <figure><img  src={image} alt="course-img" /></figure>
        <div className="card-body text-[#473465]">
          <h2 className="card-title">{title}</h2>
          <p className="text-left text-xl">{description}</p>
          <div className=" flex justify-between items-center ">
    
          
          <h2 className="text-center text-xl">Price: {price} $</h2>
         
          </div>
          <div className="w-full">
          <Link to={`/details/${id}`}><button className='text-white w-full mt-4 mb-4 hover:bg-[#ec83ab] bg-[#301a52] px-12 py-4'>Details</button></Link>
          </div>
        </div>
      </div>
      
       </div>
    );
};

HomeCard.propTypes = {
   services:PropTypes.obj,
}



export default HomeCard;