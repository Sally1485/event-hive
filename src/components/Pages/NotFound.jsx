import Navbar from "../Navbar";
import Footer from "../Footer";
import ErrorImage from "../../assets/images/error.png";
import { Instagram, Facebook, Linkedin, Twitter, Youtube } from "lucide-react";

export default function NotFound(){
    return(
    <>
    <Navbar />
    <section className=" flex flex-col h-[30vh] items-center w-[70%] mx-auto">
     <img src={ErrorImage} alt="404 image" />
    </section>
    <section className="  "> 
        <div className="text-center pt-60">
        <h2 className="font-extrabold text-xl ">Oops</h2>    
        <p className="font-light pt-2">We can't seem to find the page you are looking for</p>
        </div>
        <div className="flex pt-14 justify-center">
        <button className="bg-blue-700 text-white  px-4 py-1 rounded-2xl ">Back to Homepage</button>
        </div>
    </section>
    <section className="pb-16">
        <div className="text-center pt-10">
        <h3 className="font-medium">Follow us on</h3>
       </div>
       <div className="flex flex-row justify-center pt-6 gap-8 text-purple-blue ">
        <span className="bg-gray-300 rounded-sm "><Facebook/></span>
        <span className="bg-gray-300 rounded-sm "><Instagram /></span>
        <span className="bg-gray-300 rounded-sm "><Linkedin/></span>
        <span className="bg-gray-300 rounded-sm "><Twitter/></span>
        <span className="bg-gray-300 rounded-sm "><Youtube/></span>
        </div>
    </section>

    <Footer />
    
    </>
    )
}