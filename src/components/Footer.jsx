import { Linkedin, Instagram, Facebook, InstagramIcon } from "lucide-react";
function Footer(){
    return (
       <footer className="bg-navy-blue text-white flex flex-col text-center justify-around">
        <h1 className="m-4 text-3xl font-bold"><span>Event</span> <span className="text-purple-blue text-3xl">Hive</span></h1>
        <form className=" flex justify-center p-4 gap-2">
            <input type="email" placeholder="Enter your mail" name="email" className="border-1 px-4 py-2 bg-white text-black outline-0 rounded-lg" />
            <button type="submit" className="bg-purple-blue text-white px-4 py-2 rounded-lg">Subscribe</button>
        </form>
        <div className="flex flex-row justify-center gap-6 p-4">
            <span>Home</span>
            <span>About</span>
            <span>Services</span>
            <span>Get in Touch</span>
            <span>FAQs</span>
        </div>
        <hr className="border-t border-white  justify-center ml-5 mr-5"/>
        <div className="flex justify-between p-4">
            <div className="flex justify-between gap-2 text-sm ">
            <span className=" p-2 hover:bg-purple-blue" ><button >English</button></span>
            <span className="p-2 hover:bg-purple-blue"><button>French</button></span>
           <span className="p-2 hover:bg-purple-blue"><button>Hindi</button></span> 
            </div>
            <div className=" flex flex-row justify-center gap-2  items-center">
             <Linkedin />
             <Instagram />
             <Facebook />
            </div>
            <div>
            <p className="text-sm">NonCopyrighted &copy;2025 Upload by rich technologies</p>
            </div>
        </div>
       </footer>
    );
}
export default Footer;