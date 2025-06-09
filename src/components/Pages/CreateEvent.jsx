import Navbar from "../Navbar";

export default function(){
   return(
    <>
   <Navbar />
 <section>
   <div className="text-center text-3xl font-bold">
    <h1>Create Event</h1>
    </div>
   <form className="h-[50vh] w-[50%] mx-auto p-4">
     <div className="flex flex-col ">
      <label htmlFor="event-title"className="font-bold">Event Title</label>
  <input type= "text" name="text" id="text" placeholder="Enter Mail" className="border-1 outline-indigo-none h-8 rounded-sm pt-2 px-4 py-2" />
    </div>
    <div className="flex flex-col pt-4 ">
      <label htmlFor="event-venue"className="font-bold">Event Venue</label>
  <input type="text" name="text" id="text" placeholder="Enter Mail" className="border-1 outline-indigo-none h-8 rounded-sm pt-2 px-4 py-2" />
    </div>
    <div className="flex flex-1/2 pt-4 gap-8 ">
      <div className="flex flex-col">
      <label htmlFor="start-time"className="font-bold">Start Time</label>
  <input type="text" name="text" id="text" placeholder="Enter Mail"className="border-1 outline-indigo-none h-8 rounded-sm pt-2 px-4 py-2" />
    </div>
    <div className="flex flex-col">
      <label htmlFor="end-time" className="font-bold">End Time</label>
  <input type="text" name="text" id="text" placeholder="Enter Mail" className="border-1 outline-indigo-none h-8 rounded-sm pt-2 px-4 py-2" />
    </div>
    </div>
    <div className="flex flex-1/2 pt-4 gap-8 ">
       <div className="flex flex-col">
         <label htmlFor="start-date"className="font-bold">Start Date</label>
  <input type="text" name="text" id="text" placeholder="Enter Mail" className="border-1 outline-indigo-none h-8 rounded-sm pt-2 px-4 py-2" />
    </div>
    <div className="flex flex-col ">
      <label htmlFor="end-date" className="font-bold">End Date</label>
  <input type="text" name="text" id="text" placeholder="Enter Mail" className="border-1 outline-indigo-none h-8 rounded-sm pt-2 px-4 py-2  " />
    </div>
       </div>
   </form>
 </section>
 <section className="w-[50%] mx-auto">
  <h2 className="text-center text-2xl font-bold pt-4">Event Description</h2>
  <div>
  <h3>Event Image</h3>
  <input type="image" src="" alt="" />
  </div>
  <div>
    <h3>Event Description</h3>
    <input type="text" name="text" id="text" className="w-[50%] h-40" />
  </div>
  <div className="text-center"> 
    <button className="bg-purple-blue text-white rounded px-20 py-2">Create Event</button>
  </div>
 </section>
    </>
    );
}