import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../ContextApi/AuthProvider";
import deemyAvatar from '../assest/user.png';

const Navbar = () => {
  const {user,logOut} = useContext(AuthContext);

  console.log(user)
   const navLinks = <>
        <NavLink className='font-semibold uppercase  ' to='/'> <li><a>Home</a></li></NavLink>
        <NavLink className='font-semibold uppercase' to='/about'> <li><a>About</a></li></NavLink>
        <NavLink className='font-semibold uppercase' to='/service'> <li><a>Services</a></li></NavLink>
        <NavLink className='font-semibold uppercase' to='/register'> <li><a>Register</a></li></NavLink>
        {
          user && <>
             <NavLink className='font-semibold uppercase' to='/dashboard'> <li><a>Dashboard</a></li></NavLink>
             <NavLink className='font-semibold uppercase' to='/orderHistory'> <li><a> Cart</a></li></NavLink>
          </>
        }
   </>

   //handelLogOut

   const handelLogOut = () =>{
        logOut();
   }

    return (
       <section className="bg-[#fff] text-[#41405e]">
         <div className="navbar px-2 py-6 container">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
             {navLinks}
            </ul>
          </div>
          <Link to= '/'><a className="btn btn-ghost normal-case text-2xl font-extrabold ">GigGather</a></Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navLinks}
          </ul>
        </div>
       {/* USER   */}   
       <div className="navbar-end ">
       <div className=" mr-16 md:mr-20">
       {
          user ? <button onClick={handelLogOut} className="btn">LogOut</button> :  <Link to ='/login'> <button className="btn ">Login</button></Link>
        }
       </div>
            <div className=" dropdown dropdown-end ">
         
            <label  tabIndex={0} className="btn btn-ghost btn-circle avatar absolute right-0 -bottom-6">
        <div className="w-10 rounded-full">
          {
              user?  <img src={user.photoURL} alt="avatar" /> :
              <img src={deemyAvatar} alt="avatar" />
          }
        </div>
      </label>
      <ul tabIndex={0} className="mt-3 z-[1] p-8 shadow menu menu-sm dropdown-content bg-base-100 rounded-box ">
        {
          user && <div>
            <li className="text-[#e55189]">Email:{user.email}</li>
            <li>Name: {user.displayName}</li>
          </div>
        }
        
      </ul>
            </div>
        </div>

      </div>
       </section>
    );
};

export default Navbar;