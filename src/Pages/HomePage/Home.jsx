import Banner from "../../components/Banner";
import aboutImg from '../../assest/about.png'
import Features from "../../components/Features";
import EventSchedule from "../../components/EventSchedule";

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <div className=" justify-center items-center md:pb-20 md:pt-20 gap-40 about-section grid md:grid-cols-2 container">
                <div className="">
                    <img src={aboutImg} alt="" />
                </div>
                <div className=" ">
                    <p className="text-2xl mb-4 font-bold text-[#f46480]">Connect to the world</p>
                    <h2 className="text-5xl font-extrabold text-[#301a52]">  Skills, Events, Success</h2>
                    <p className="font-semibold mt-8">We are going to arrange World’s Biggest Freelancer Conference on Friday, 1 December 2023, “ International Freelancers Conference 2023 Powered by GigGather”. </p>
                    <p className="font-semibold mt-2">The conference will feature top professionals, entrepreneurs, freelancers, ministers, and government officials as our speakers and conference guests. </p>
                    <button className='text-white mt-6 bg-[#301a52] px-12 py-4'>Register Now</button>
                </div>
           </div>
           <div className="bg-[#ededec]">
           <Features></Features>
           </div>
           {/* Event Schedule */}
           <div className="bg-[#191d27] pt-10 pb-10">
           <h2 className="text-5xl font-extrabold text-center text-[#e55189]"> Event Schedule</h2>
          </div>
          <div className="container pt-10 pb-10">
            <EventSchedule></EventSchedule>
          </div>
        </div>
    );
};

export default Home;