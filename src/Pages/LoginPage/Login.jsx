import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div>
           <div className="hero mt-10 md:w-1/2 m-auto shadow-2xl bg-base-100">
  <div className="hero-content flex-col w-full ">
    <div className="text-center lg:text-center">
      <h1 className="text-3xl font-bold mt-4">Login your account</h1>
      
    </div>
    <div className="card  flex-shrink-0 md:w-full  max-w-sm">
      <form  className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text text-xl text-[#403F3F] font-semibold">Email address</span>
          </label>
          <input  name="email" type="email" placeholder="Enter your email address" className="input input-bordered px-8 py-4 bg-[#F3F3F3] rounded-md border-0" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-xl text-[#403F3F] font-semibold">Password</span>
          </label>
          <input name="password" type="password" placeholder="Enter your password" className="input input-bordered px-8 py-4 bg-[#F3F3F3] rounded-md border-0" required />
        </div>
        <div className="form-control mt-6">
          <button className="btn text-white btn-success border-0 rounded-md bg-[#301a52] hover:bg-[#e55189] capitalize">Login</button>
        </div>
      </form>
      <div className="p-3 text-center mb-3">
      <h2>Dont’t Have An Account ? <Link to='/register'><span className="text-[#f8615d] ">Register</span></Link></h2>
      </div>
      <div className='border-t-2 pt-4 pb-6'>
      <button className="btn text-white w-full btn-success border-0 rounded-md bg-[#301a52] hover:bg-[#e55189] capitalize">Login With Google</button>
      <button className="btn mt-4 text-white w-full btn-success border-0 rounded-md bg-[#301a52] hover:bg-[#e55189] capitalize">Login With Github</button>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Login;