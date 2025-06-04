import Navbar from "../Navbar";
import Footer from "../Footer";
import viewCollegeImage from "../../assets/images/view-college.png";
import EventCard from "../EventCard";


export default function ViewCollege(){
    return(
    <>
    <Navbar/>
    <section className="h-screen w-[90%] mx-auto">

     <img src={viewCollegeImage} alt="view college image" />
    </section>
    <section className="w-[80%] mx-auto">
        <h2 className="text-3xl font-bold">IIT Roorke</h2>
       <div className="pt-4 text-sm font-light">
         <p>DesignHub organized a 3D Modeling Workshop using Blender on 16th February at 5 PM. The workshop taught participants the magic of creating stunning 3D models and animations using Blender. It was suitable for both beginners and experienced users. The event was followed by a blender-render competition, which added to the excitement.</p> <br />
        <p>DesignHub organized a 3D Modeling Workshop using Blender on 16th February at 5 PM. The workshop taught participants the magic of creating stunning 3D models and animations using Blender. It was suitable for both beginners and experienced users. The event was followed by a blender-render competition, which added to the excitement</p> <br />
        <p>DesignHub organized a 3D Modeling Workshop using Blender on 16th February at 5 PM. The workshop taught participants the magic of creating stunning 3D models and animations using Blender. It was suitable for both beginners and experienced users. The event was followed by a blender-render competition, which added to the excitement</p> <br />
        <p>DesignHub organized a 3D Modeling Workshop using Blender on 16th February at 5 PM. The workshop taught participants the magic of creating stunning 3D models and animations using Blender. It was suitable for both beginners and experienced users. The event was followed by a blender-render competition, which added to the excitement</p> <br />
       </div>
    </section>
    <section className="w-[80%] mx-auto pb-4">
        <h2 className="text-3xl font-bold ">
            <span>College</span>
            <span className="text-purple-blue">Events</span>
            </h2>
            <div className="grid grid-cols-3 gap-2"> 
                {[1,2,3,4,5,6].map(n => <EventCard key={n} />)}
            </div>
        
    </section>
    
    <Footer/>
    </>
    )
}