import { Outlet } from "react-router-dom";
import Footer from "../Pages/FooterPage/Footer";
import Navbar from "../components/Navbar";


const Root = () => {
    return (
       
        <section>
        <Navbar></Navbar>
           
       <Outlet></Outlet>
       
        <Footer></Footer>
        </section>
    );
};

export default Root;