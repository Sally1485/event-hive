import { createBrowserRouter, RouterProvider } from "react-router";
import Register from "./components/Pages/Register";
import Login from "./components/Pages/Login";
import Home from "./components/Pages/Home";
import ViewCollege from "./components/Pages/ViewCollege";
import ViewEvent from "./components/Pages/ViewEvent";
import NotFound from "./components/Pages/NotFound";
import CreateEvent from "./components/Pages/CreateEvent";

const eventHiveRouter = createBrowserRouter([
  {path:'/', element: <Home />},
  {path:'/register', element: <Register/>},
  {path:'/login', element: <Login />},
  {path:'/viewcollege', element: <ViewCollege />},
  {path:'/viewevent', element: <ViewEvent />},
  {path:'*', element: <NotFound />},
  {path:'/createevent', element: <CreateEvent />}
]);
function App() {
 

  return (
    <>
<RouterProvider router={eventHiveRouter} />
        </>
  )
}

export default App
