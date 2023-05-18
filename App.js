import Welcome from "./Component/Welcome";
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import Loginpage from "./Component/Loginpage";
import Error from "./Component/Error";
import Homepage from "./Component/Homepage";

function App() {

  const router = createBrowserRouter([
    {path:'/', element: <Welcome/>,errorElement:<Error/>},
    {path:'/login', element: <Loginpage/>},
    {path:'/home', element: <Homepage/>}

  ])

  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}
export default App;