import Navbar from "../Navbar";
import Footer from "../Footer";
import ErrorImage from "../../assets/images/error.png"

export default function NotFound(){
    return(
    <>
    <Navbar />
    <section className=" flex flex-col h-[30vh] items-center w-[70%] mx-auto">
     <img src={ErrorImage} alt="404 image" />
    </section>
    <section className=" flex flex-col text-center "> 
        <h2 className="font-extrabold">Oops</h2>    
        <p>We can't seem to find the page you are looking for</p>
        <button className="bg-blue-700 text-white">Back to Homepage</button>
    </section>
    <section className="h-[100vh]"></section>
    <Footer />
    
    </>
    )
}