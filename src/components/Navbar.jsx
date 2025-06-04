export default function Navbar () {
    return (
   <nav className="flex  justify-between  px-6 py-4"> 
    <h1 className="text-3xl font-bold">
        <span>Event</span> 
        <span className="text-purple-blue text-3xl">Hive</span>
    </h1>
    <div className=" flex flex-row justify-between gap-4">
<button>Login</button>
<button className="bg-purple-blue px-4 py-2 rounded-sm text-white">Signup</button>
    </div>
    </nav>
    )
}