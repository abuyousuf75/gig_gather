import { useEffect } from "react";
import Aos from 'aos';
import 'aos/dist/aos.css';
const Spekaer = ({Aspeaker}) => {
   const {id,name,designation,img,platform} = Aspeaker;
    useEffect(()=>{
            Aos.init()
    },[])
    return (
        <div className="speakerImg relative" data-aos="fade-up">
            <img src={img} alt="" />
            <div className="speakerOverlay w-full  flex text-center justify-center items-center h-full absolute left-0 top-0  opacity-0 ">
                <div className="speakerOverlayContent ">
               <h2 className="text-xl font-bold  ">{name}</h2>
               <p>{designation}</p>
                <p className="text-[#e55189] font-semibold">{platform}</p>
                </div>
            </div>
        </div>
    );
};

export default Spekaer;