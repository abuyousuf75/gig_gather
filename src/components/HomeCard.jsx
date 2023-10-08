import { PropTypes } from "prop-types";

const HomeCard = ({services}) => {
    const {id,image,features,title,description,price} =  services;
  
    for(const services of features){
      console.log(services)
    }
    return (
       <div>
         <div className="card card-compact h-full  bg-base-100 shadow-xl">
        <figure><img  src={image} alt="course-img" /></figure>
        <div className="card-body text-[#473465]">
          <h2 className="card-title">{title}</h2>
          <p className="text-left text-xl">{description}</p>
          <div className=" flex justify-between items-center ">
    
          
          <h2 className="text-center text-xl">Price: {price} $</h2>
         
          </div>
          <button className='text-white  mt-4 mb-4 hover:bg-[#ec83ab] bg-[#301a52] px-12 py-4'>Get Started</button>
        </div>
      </div>
      
       </div>
    );
};




export default HomeCard;