import eventcardImage from "../assets/images/event-card1.png";

export default function EventCard () {
    return(
        <div >
             <img src={eventcardImage} alt="Event Card" />
             <h1>BestSeller Book Bookcamp -write, Market & Publish Your Book -Lucknow</h1>
             <h2>Saturday, March 18, 9:30PM</h2>
             <h3>ONLINE EVENT - Attend anywhere</h3>
        </div>
    );
}