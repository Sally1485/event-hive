import Navbar from "../Navbar";
import Footer from "../Footer";
import { Search } from "lucide-react";
import EventCard from "../EventCard";
import { useState, useEffect } from "react";
import axios from "axios";
import Animations from '../../assets/images/animation.png'


export default function Home() {
    // Declare state variable in react 
    const [events, setEvents] = useState([]);

    // Define a function to fetch events from API
    const getEvents = () => {
        axios.get('https://fakestoreapi.com/products')
            .then(response => {
                setEvents(response.data);
            })
            .catch(error => {
                console.log(error);
            })
    }
    // Run fetcher using based on side-effects
    useEffect(getEvents, []);


    return (
        <>
            <Navbar />
            <section className="
            -[596px] bg-cover w-[95%] mx-auto relative">
                <h1 className="text-white text-big-heading w-[30%] mx-auto text-center pt-36">MADE FOR THOSE WHO DO</h1>
                <form className="bg-navy-blue  w-[90%] mx-auto px-10 py-6 flex flex-row  justify-between absolute -bottom-5 left-12">
                    <div className=" flex flex-col w-[30%] ">
                        <label htmlFor="type" className="text-white">Looking for</label>
                        <select name="type" id="type" className="bg-white p-2 rounded-md ">
                            <option selected disabled >Choose event type</option>
                            <option value="drama">Drama</option>
                            <option value="tech">Tech</option>

                        </select>
                    </div>
                    <div className=" flex flex-col w-[30%] ">
                        <label htmlFor="location" className="text-white">Location</label>
                        <select name="location" id="location" className="bg-white p-2 rounded-md ">
                            <option selected disabled >Choose location</option>
                            <option value="accra">Accra</option>
                            <option value="kumasi">Kumasi</option>

                        </select>
                    </div>
                    <div className=" flex flex-col w-[30%]">
                        <label htmlFor="when" className="text-white">When</label>
                        <input type="datetime-local" name="when" id="when" className="bg-white p-1.5 rounded-md" />

                    </div>
                    <div className="bg-purple-400 text-white size-[60px] flex flex-row justify-center items-center rounded-md" >
                        <Search />
                    </div>
                </form>
            </section>
            <section>
                <div>
                    <h1>
                        <span>Upcoming</span>
                        <span>Events</span>
                    </h1>
                </div>
                <div className="grid grid-cols-3 gap-5 rounded-lg bg-gray-200">
                    {events.map(item => {
                        return (
                            <EventCard key={item.id} event={item} />
                        );
                    })}
                </div>
            </section>
            <section className="flex flex-row bg-navy-blue text-white pl-20 mt-12 relative h-[238px] ">
                <div>
                    <img src={Animations} alt="animation image" className="relative -top-8  mx-auto w-120" />
                </div>
                <div className=" pt-8 w-[45%] mx-auto ">
                    <h2 className="text-xl ">Make your own Event</h2>
                    <p className="pt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <button className="bg-purple-blue px-16 py-2 rounded mt-6">Create Events</button>
                </div>
            </section>
            <section>
                <h2>
                    <span>Join these</span>
                    <span>brands</span>
                </h2>
                <p>We've have the pleasure of with industry-defining brands. These are just some of them</p>
            </section>

            <section className="h-[200px]"></section>

            <Footer />
        </>
    )
}





























// import Navbar from '../components/Navbar.jsx';
// import { ArrowBigDown } from 'lucide-react';
// import HomeCard from '../components/HomeCard.jsx';
//   import FictionImage from '../assets/images/Fiction.jpg';
// import NonFictionImage from '../assets/images/non-fiction.jpg';
// import HorrorImage from '../assets/images/horror.jpg';
// import ThrillerImage from '../assets/images/thriller.jpg';
// import SciFiImage from '../assets/images/sci-fi.jpg';
// import DramaImage from '../assets/images/drama.jpg';



// export default function Home() {


// const cards = [
//   { id: 1, image: FictionImage, title: "Fiction" },
//   { id: 2, image: NonFictionImage, title: "Non-Fiction" },
//   { id: 3, image: HorrorImage, title: "Horror" },
//   { id: 4, image: ThrillerImage, title: "Thriller" },
//   { id: 5, image: SciFiImage, title: "Sci-Fi" },
//   { id: 6, image: DramaImage, title: "Drama" },
// ];

//     return (

//       <div className='relative h-full'>
//         {/* <div className="absolute inset-1 bg-gradient-to-r from-black-700 via-black/50 to-black/90 z-2"></div> */}
//           <div className="backdrop-blur-md bg-[url(./assets/images/booklib.jpg))] bg-cover ">
//             <Navbar />

//             <div >
//                 <h1 className="font-bold text-center text-6xl pt-10"><span className="text-black">Welcome to</span> <span className="text-red-700 "> BOOK SHELF</span>.</h1>
//                 <h2 className='font-medium text-center text-5xl pt-10'>Discover the best books <span className="text-white">HERE!</span></h2>
//                 {/* <ArrowBigDown className=' flex flex-col size-30 items-center text-red-400 animate-bounce'/> */}
//             </div>
//             <div className="flex  justify-center pt-6">
//                 <button className="bg-red-800 hover:bg-red-400 px-6 py-2 rounded text-white">VIEW HERE</button>
//             </div>
//             <div className='w-[80%] grid grid-cols-3 gap-4  pt-8 mx-auto '>
//                 {cards.map(item  => {
//                     return (
//                         <HomeCard key={item.id} image={item.image} title={item.title} />
//                     )
//                 })}
//             </div>



//         </div>
//       </div>
//     );
// }
