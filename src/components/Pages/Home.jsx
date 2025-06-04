import Navbar from "../Navbar";
import Footer from "../Footer";
import { Search } from "lucide-react";
import EventCard from "../EventCard";
import { useState, useEffect } from "react";
import axios from "axios";


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
            <section className="bg-[url(./assets/images/hero.png)] h-[596px] bg-cover w-[95%] mx-auto relative">
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

            <section className="h-[200px]"></section>

            <Footer />
        </>
    )
}