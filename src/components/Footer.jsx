import { Linkedin, Instagram, Facebook, InstagramIcon } from "lucide-react";
function Footer(){
    return (
       <footer className="bg-navy-blue text-white flex flex-col items-center">
        <h1 className="m-4 text-3xl font-bold"><span>Event</span> <span className="text-purple-blue text-3xl">Hive</span></h1>
        <form className=" flex justify-between p-4 gap-2">
            <input type="email" placeholder="Enter your mail" name="email" className="border-1 px-4 py-2 bg-white text-black outline-0 rounded-lg" />
            <button type="submit" className="bg-purple-blue text-white px-4 py-2 rounded-lg">Subscribe</button>
        </form>
        <div className="flex flex-row justify-between gap-10 p-4">
            <span>Home</span>
            <span>About</span>
            <span>Services</span>
            <span>Get in Touch</span>
            <span>FAQs</span>
        </div>
        <hr />
        <div className="flex flex-row justify-between  text-sm">
            <div className="flex flex-row justify-between gap-2">
            <button className="hover:bg-purple-blue rounded-lg">English</button>
            <button>French</button>
            <button>Hindi</button>
            </div>
            <div className=" flex justify-around gap-2">
             <Linkedin />
             <Instagram />
             <Facebook />
            </div>
            <p className="flex text-justify" >NonCopyrighted &copy;2025 Upload by rich technologies</p>
        </div>
       </footer>
    );
}
export default Footer;