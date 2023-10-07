import banner from '../assest/banner.jpg'
import banner2 from '../assest/banner2.jpg'
import '../components/Banner.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
const Banner = () => {
    
    return (
           <Carousel autoPlay={true}>
            <div className="banner" style={{background: `url(${banner})`}}>
           <div className="banner-overlay">
              <div className='pt-28'>
              <p className='text-[#f5984c] text-xl font-semibold'>A online learning school </p>
               <div className="flex justify-center items-center ">
               <h2 className='md:text-4xl font-bold w-96 md:w-[700px] text-white mt-10'>Are you ready to embark on a journey of knowledge, growth, and endless possibilities?</h2>
               </div>
               <button className='text-white mt-12 bg-[#e55189] px-12 py-6'>Get Started</button>
              </div>
           </div>
           </div>
           {/* 2nd slider */}
           <div className="banner" style={{background: `url(${banner2})`}}>
           <div className="banner-overlay">
              <div className='pt-28'>
              <p className='text-[#f5984c] text-xl font-semibold'>A online learning school </p>
               <div className="flex justify-center items-center ">
               <h2 className='md:text-4xl font-bold w-96 md:w-[700px] text-white mt-10'>High Quality Education Online! Let’s Start An EducationWith Us!</h2>
               </div>
               <button className='text-white mt-12 bg-[#e55189] px-12 py-6'>Get Started</button>
              </div>
           </div>
           </div>

           </Carousel>
        
    );
};

export default Banner;