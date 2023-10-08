import Banner from "../../components/Banner";
import aboutImg from '../../assest/about.png'
import Features from "../../components/Features";
import EventSchedule from "../../components/EventSchedule";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../ContextApi/AuthProvider";
import Spekaer from "../../components/Spekaer";
import Aos from 'aos';
import 'aos/dist/aos.css'

const Home = () => {
    // recive props 
   const {speakers} = useContext(AuthContext);
    useEffect(()=>{
        Aos.init();
    },[])

    return (
        <div data-aos="fade-up">
           <Banner></Banner>
           <div className=" justify-center md:text-left text-center pb-4 items-center md:pb-20 md:pt-20 pt-6 md:gap-40 about-section grid md:grid-cols-2 container">
                <div data-aos="fade-right">
                    <img src={aboutImg} alt="" />
                </div>
                <div data-aos="fade-left">
                    <p className="text-2xl mb-4 mt-4 md:mt-0 font-bold text-[#f46480]">Connect to the world</p>
                    <h2 className="text-5xl font-extrabold text-[#301a52]">  Skills, Events, Success</h2>
                    <p className="font-semibold mt-8">We are going to arrange World’s Biggest Freelancer Conference on Friday, 1 December 2023, “ International Freelancers Conference 2023 Powered by GigGather”. </p>
                    <p className="font-semibold mt-2">The conference will feature top professionals, entrepreneurs, freelancers, ministers, and government officials as our speakers and conference guests. </p>
                    <button className='text-white mt-6 bg-[#301a52] px-12 py-4'>Register Now</button>
                </div>
           </div>
           <div data-aos="fade-up" className="bg-[#ededec] ">
           <Features></Features>
           </div>
           {/* Event Schedule */}
           <div  className="bg-[#191d27] pt-10 pb-10">
           <h2 className="text-5xl font-extrabold text-center text-[#e55189]"> Event Schedule</h2>
          </div>
          <div className="container pt-10 pb-10">
            <EventSchedule></EventSchedule>
          </div>
            {/* speakers */}
            <div data-aos="fade-up" className=" pt-10 pb-4 bg-[#ededec]">
                <div className="container">
                <p className="text-2xl mt-10 text-center font-bold text-[#f46480]">Let's Meet With</p>
                <h2 className="text-5xl font-extrabold text-center text-[#301a52] mb-16 "> Our Speakers</h2>
                   <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4 mb-10">
                 
                  {
                        speakers.map(Aspeaker => <Spekaer key={Aspeaker.id} Aspeaker={Aspeaker}></Spekaer>)
                    }
                 
                   </div>
                </div>
            </div>
        </div>
    );
};

export default Home;