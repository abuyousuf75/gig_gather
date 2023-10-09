import { Link } from 'react-router-dom';
import errorImg from '../../assest/error.png'

const Error = () => {
    return (
        <div className="container ">
            <div className='flex justify-center items-center pt-10'>
                <img src={errorImg} alt="error" />
            </div>
           <div className='text-center mt-10'>
            <h2 className='md:text-5xl font-bold pb-8'>404 - Page Not Found</h2>
            <Link to='/'><button className='text-xl font-bold px-6 py-4 bg-[#e55189] text-white'>GO TO HOME</button></Link>
           </div>
        </div>
    );
};

export default Error;