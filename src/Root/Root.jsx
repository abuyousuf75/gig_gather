import { Outlet } from "react-router-dom";
import Footer from "../Pages/FooterPage/Footer";
import Navbar from "../components/Navbar";
import { Toaster } from "react-hot-toast";


const Root = () => {
    return (
       
        <section>
        <Navbar></Navbar>
           
       <Outlet></Outlet>
       
        <Footer></Footer>
        <Toaster/>
        </section>
    );
};

export default Root;