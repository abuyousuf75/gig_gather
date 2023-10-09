import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../ContextApi/AuthProvider";


const Details = () => {
   
    
    const {featuredSession} = useContext(AuthContext);
    const [sortData, setSortedData] = useState({features:[]});
    const {id}= useParams();
    // const [list, setList] = useState('')
    const {image,info,title,description,price} = sortData;

     
    // sort by id

    useEffect(()=>{
        const details =  featuredSession.find((item) => item.id ==id );
        setSortedData(details)
    },[ featuredSession,id]);

    
    return (
        <div className="container pt-6 pb-6">
            <div className="grid md:grid-cols-2 gap-2 md:gap-8 justify-center text-center md:text-left">
                    <div>
                        <img src={image} alt="" />
                        <p className="text-[#3d285c]  font-bold mt-4 pr-8">{info}</p>
                    </div>
                    <div className="border p-4">
                        <h2 className="text-xl font-bold text-[#3d285c] md:uppercase capitalize">{description}</h2>
                        <p className="text-[#e55189] font-bold mt-2 text-xl">{title}</p>
                        <p className="mt-2 font-bold text-xl mb-2">${price}</p>
                       <div>
                       <ul>
                       {  sortData.features.map((list, index) => (
                      <li key={index} className="font-bold mb-1">{list}</li>
                         ))}
                       </ul>
                        <button className="py-3 px-8 mt-4 mb-2 bg-[#e55189] text-white">Buy Now</button>
                       </div>
                    </div>
    
                </div>
               
            </div>
    );
};

export default Details;