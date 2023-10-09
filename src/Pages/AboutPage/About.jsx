import aboutUs from '../../assest/aboutUs.png';

const About = () => {
    return (
        <div className="container text-center md:text-left justify-center items-center pt-10 pb-10 grid md:grid-cols-2 gap-8">
         <div>
         <img src={aboutUs} alt="" />
         </div>
           <div>
            <p className='text-xl  text-[#301a52] pb-10'>Welcome to GigGather, your trusted partner in event management based in the heart of Bangladesh. With a passion for creating memorable experiences and a commitment to excellence, we have been serving clients across the nation for 2 years.</p>
            <button className='px-6 py-3 bg-[#301a52] text-[#fff]' >Laern More</button>
           </div>
        </div>
    );
};

export default About;