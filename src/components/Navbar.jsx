import { Link, NavLink } from "react-router-dom";


const Navbar = () => {
   const navLinks = <>
        <NavLink className='font-semibold uppercase  ' to='/'> <li><a>Home</a></li></NavLink>
        <NavLink className='font-semibold uppercase' to='/about'> <li><a>About</a></li></NavLink>
        <NavLink className='font-semibold uppercase' to='/service'> <li><a>Services</a></li></NavLink>
        
   </>
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
       <Link to ='/login'> <button className="btn mr-28">Login</button></Link>
            <div className=" dropdown dropdown-end ">
         
            <label  tabIndex={0} className="btn btn-ghost btn-circle avatar absolute right-0 -bottom-6">
        <div className="w-10 rounded-full">
          <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </label>
      <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
        
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
            </div>
        </div>

      </div>
       </section>
    );
};

export default Navbar;