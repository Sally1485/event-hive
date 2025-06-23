import Navbar from "../Navbar";
import useSWR from "swr";
import { apiFetcher, apiClient } from "../../../api/client";
import { Option } from "lucide-react";
import SubmitButton from "../SubmitButton";
import { useNavigate } from "react-router";

export default function () {
  const navigate = useNavigate();
  const { data, isLoading, error } = useSWR("/colleges", apiFetcher);

  const postEvent = async (data) => {
    try {
      const response = await apiClient.post('/events', data, {
        headers: {
          Authorization: ` Bearer ${localStorage.getItem('ACCESS_TOKEN')}`
        }
      });
      console.log(response.data);
      navigate(`/view-event?id=${response.data.data.id}`);
    } catch (error) {
      console.log(error);
    }
  }


  return (
    <div className="bg-bgGrey">
      <Navbar />

      <div className="text-center text-3xl font-bold">
        <h1>Create Event</h1>
      </div>
      <form action={postEvent} className=" w-[50%] mx-auto p-4">
        <div className="flex flex-col ">
          <label htmlFor="college" className="font-bold p-2">College</label>
          <select name="college" id="college" className="bg-white  h-12 rounded pt-2 px-4 py-2">
            {isLoading ? <option value="">Loading...</option> :
              error ? <option value="">something went wrong</option> :
                data.data.map((college) => {
                  return <option key={college.id} value={college.id}>{college.name}</option>
                })}



          </select>

        </div>
        <div className="flex flex-col ">
          <label htmlFor="event-title" className="font-bold p-2">Event Title</label>
          <input type="text" name="text" id="text" placeholder="Enter Mail" className="bg-white h-12 rounded pt-2 px-4 py-2" />
        </div>
        <div className="flex flex-col pt-4 ">
          <label htmlFor="event-venue" className="font-bold p-2">Event Venue</label>
          <input type="text" name="text" id="text" placeholder="Enter Mail" className="bg-white  h-12 rounded pt-2 px-4 py-2" />
        </div>

        <div className="flex flex-1/2 pt-4 gap-8 ">
          <div className="flex flex-col">
            <label htmlFor="start-date" className="font-bold p-2">Start Date</label>
            <input type="datetime-local" name="start" id="text" placeholder="Enter Mail" className="bg-white h-8 rounded pt-2 px-4 py-2" />
          </div>
          <div className="flex flex-col ">
            <label htmlFor="end-date" className="font-bold p-2">End Date</label>
            <input type="datetime-local" name="tend" id="text" placeholder="Enter Mail" className="bg-white  h-8 rounded-sm pt-2 px-4 py-2  " />
          </div>
        </div>



        <h2 className="text-center text-2xl font-bold w pt-4">Event Description</h2>
        <div>
          <h3>Event Image</h3>
          <input type="file" name="image" id="image" className="w-full" />
        </div>
        <div>
          <h3 className="p-2 font">Event Description</h3>
          <input type="text" name="description" id="text" className="w-full bg-white  h-40" />
        </div>

        <div className="pt-4">
          <h3 className="p-2  font-bold">Event Tags</h3>
          <select multiple name="tags" id="tags" className="bg-white p-3 h-20 rounded w-full pt-2 px-4 py-2" >
            <option value="social">Social</option>
            <option value="education "> Education</option>
            <option value="fun-fair">Fun-fair</option>
            <option value="business">Business</option>
            <option value="party">Party</option>
          </select>
        </div>
        <div className="text-center">
          <SubmitButton title={'Create Event'} className="bg-primary text-white rounded px-20 py-2" />
        </div>
      </form>
    </div>

  );
}