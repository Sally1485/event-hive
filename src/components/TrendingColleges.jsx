import { apiFetcher } from "../../api/client";
import CollegeCard from "./CollegeCard";
import useSWR from "swr";
import { ClipLoader } from "react-spinners";


export default function TrendingColleges() {
    // where "/colleges is a url"
    // limit = 3 should limit your cards to 3 && skip=4 means it should skip the first 4
const {data,error,isLoading} = useSWR('/colleges?limit=3&skip=3', apiFetcher);
// take it off when needed
console.log(data);

if (isLoading){
    return (
    <div className="flex justify-center items-center">
        <ClipLoader size={50} />
    </div>
    )
}
 if (error){
    return(
        <p className="text-3xl text-red-600">Oops!Something went wrong</p>
    );
 }



    return (
        <section className="mt-20 w-[90%] mx-auto">
            <h1 className="font-bold text-2xl mb-4 space-x-2">
                <span>Trending</span>
                <span className="text-[#7848F3]">colleges</span>
            </h1>
            <div className="grid grid-cols-3 gap-5">
                {[data.data].map(college => <CollegeCard key={college.id}  
                college = {college}
                />)}
            </div>
            <div>
                <button className="bg-primary rounded-md py-2 px-4 text-white">Load more...</button>
            </div>
        </section>
    );
}




