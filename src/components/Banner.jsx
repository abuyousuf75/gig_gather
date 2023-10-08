import banner from '../assest/bg11.jpg'
import banner2 from '../assest/bg16.jpg'
import '../components/Banner.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
const Banner = () => {
    
    return (
           <Carousel showThumbs={false} >
            <div className="banner h-[450px] md:h-[80vh]" style={{background: `url(${banner})`}}>
           <div className="banner-overlay">
              <div className='pt-14 md:pt-28'>
              <p className='text-[#f5984c] text-xl font-semibold'>Find Your Next Gig Here</p>
               <div className="flex justify-center items-center ">
               <h2 className='md:text-4xl font-bold w-96 md:w-[700px] text-white mt-10'>Are you a freelancer? Want to build your community and also want to connect top rated freelancer over the world? </h2>
               </div>
               <p className='text-[#e55189] mt-10 text-xl font-bold'>Friday, 1 December 2023, New York</p>
               <button className='text-white mt-12 bg-[#e55189] px-12 py-4'>Resigter Now</button>
              </div>
           </div>
           </div>
           {/* 2nd slider */}
           <div className="banner" style={{background: `url(${banner2})`}}>
           <div className="banner-overlay">
              <div className='pt-28'>
              <p className='text-[#f5984c] text-xl font-semibold'>Skills, Events, Success</p>
               <div className="flex justify-center items-center ">
               <h2 className='md:text-4xl font-bold w-96 md:w-[700px] text-white mt-10'>Don't miss out! Register today and be part of the freelance revolution. Your success story begins here.</h2>
               </div>
               <p className='text-[#e55189] mt-10 text-xl font-bold'>Friday, 1 December 2023, New York</p>
               <button className='text-white mt-12 bg-[#e55189] px-12 py-4'>Register Now</button>
              </div>
           </div>
           </div>

           </Carousel>
        
    );
};

export default Banner;