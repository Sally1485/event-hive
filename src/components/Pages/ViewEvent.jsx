import Navbar from "../Navbar";
import Footer from "../Footer";
import { MapPin } from "lucide-react";
 import { Link } from "react-router"; 


export default function ViewEvent(){
    return(
    <>
    <Navbar />
    <section className="bg-[url(./assets/images/view-event.png)] bg-center bg-cover h-[80vh]">
  <div className="flex flex-row w-[90%] mx-auto pt-16 ">
      <div className="text-white w-[70%] mx-auto">
     <h1 className="text-4xl font-bold ">Dream world wide <br /> in Jakarta  </h1>
    <h2 className="pt-8 text-3xl font-medium">IIIT Sonepat</h2>
    <p className="w-[70%] pt-4">DesignHub organized a 3D Modeling Workshop using Blender on 16th February at 5 PM. The workshop taught participants the magic of creating stunning 3D models and animations using Blender. It was suitable for both beginners and experienced users. The event was followed by a blender-render competition, which added to the excitement.</p>
   <div className="flex flex-row pt-4"><MapPin /> <Link to={'https://maps.app.goo.gl/RBvWBvshZWrzz7X67'}>View map</Link></div>
    </div>
    <div className="bg-white p-4 items-center justify-center w-[25%]">
       <h2 className="font-bold pt-4">Date & Time</h2>
       <p className="pt-4 font-light">Saturday, March 18 2024, 9:30pm</p>
   <p className="pt-4 text-primary"><Link to={'#'}>Add to calendar</Link></p>
  <div className="flex flex-col pt-6">
         <button className="bg-primary rounded px-2 py-2 ">Book Now</button>
       <button className="bg-ashGray rounded mt-4 px-2 py-2">Program Promoter</button>
  </div>
       <p className="flex items-center justify-center pt-2 text-primary font-light ">No Refunds</p>
    </div>
  </div>
    </section> 
    <section>
        <div>
            <h2>Description</h2>
            <p>DesignHub organized a 3D Modeling Workshop using Blender on 16th February at 5 PM. The workshop taught participants the magic of creating stunning 3D models and animations using Blender. It was suitable for both beginners and experienced users. The event was followed by a blender-render competition, which added to the excitement.</p>
            <p>DesignHub organized a 3D Modeling Workshop using Blender on 16th February at 5 PM. The workshop taught participants the magic of creating stunning 3D models and animations using Blender. It was suitable for both beginners and experienced users. The event was followed by a blender-render competition, which added to the excitement.</p>
            <h3>Hour</h3>
            <h3>Weekdays hour: <span>7pm-10pm</span></h3>
            <h3>Sunday hour: <span>7pm-10pm</span></h3>
            <h2>Organizer Contact</h2>
            <p>Please go to <Link to={'www.sneakypeeks.com'} className="text-primary">www.sneakypeeks.com</Link> and refer the FAQ section for more detail</p>
        </div>
    </section>
    <section className="h-[200vh]"></section>
    <Footer/>
    </>
    )
}