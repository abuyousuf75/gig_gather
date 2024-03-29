
import { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../ContextApi/AuthProvider';

const Login = () => {
  
const {loginUser,googleLogin, githubLogin} = useContext(AuthContext);

const [userError , setUserError] = useState('');
const location = useLocation();
const navigate = useNavigate()

  // handel Login user
  const handelLoginForm = (e) =>{
    e.preventDefault();
    // clear form
    setUserError('');
    const userEmail = e.target.email.value;
    const userPassword = e.target.password.value;
    
    
    // user login info
    loginUser(userEmail,userPassword)
    .then(() =>{
     
      navigate(location.state ? location.state :'/')
   
    })
    .catch(error =>{

      setUserError(error.message)
    })
    
  }
  

// google 
  const handelGoogleLogin = () =>{
      googleLogin()
      .then(() => {
        navigate(location.state ? location.state :'/')
      })
  }

  // handelGithubLogin
  const handelGithubLogin = () =>{
    githubLogin()
    .then(() => {
      navigate(location.state ? location.state :'/')
    })
}


    return (
        <div>
           <div className="hero mt-10 md:w-1/2 m-auto shadow-2xl bg-base-100">
  <div className="hero-content flex-col w-full ">
    <div className="text-center lg:text-center">
      <h1 className="text-3xl font-bold mt-4">Login your account</h1>
      
    </div>
    <div className="card  flex-shrink-0 md:w-full  max-w-sm">
      <form onSubmit={handelLoginForm}  className="card-body">
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
        {
          userError&& <p className='text-red-700 font-bold'>{userError}</p> 
        }
        
      </form>
      <div className="p-3 text-center mb-3">
      <h2>Dont’t Have An Account ? <Link to='/register'><span className="text-[#f8615d] ">Register</span></Link></h2>
      </div>
      <div className='border-t-2 pt-4 pb-6'>
      <button onClick={handelGoogleLogin} className="btn text-white w-full btn-success border-0 rounded-md bg-[#301a52] hover:bg-[#e55189] capitalize">Login With Google</button>
      <button onClick={handelGithubLogin} className="btn mt-4 text-white w-full btn-success border-0 rounded-md bg-[#301a52] hover:bg-[#e55189] capitalize">Login With Github</button>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Login;