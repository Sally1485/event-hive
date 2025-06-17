export default function Navbar () {
    return (
   <nav className="flex  justify-between  px-6 py-4 "> 
    <h1 className="text-3xl font-bold">
        <span>Event</span> 
        <span className="text-primary text-3xl"> Hive</span>
    </h1>
    <div className=" flex flex-row justify-between gap-4">
<button>Login</button>
<button className="bg-primary px-4 py-2 rounded-sm text-white">Signup</button>
    </div>
    </nav>
    )
}