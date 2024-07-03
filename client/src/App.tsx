import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/home/Home";
import Drivers from "./pages/drivers/Drivers";
import Teams from "./pages/teams/Teams";

const App: React.FC = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/drivers",
      element: <Drivers />,
    },
    {
      path: "/teams",
      element: <Teams />,
    },
  ]);

  return (
    <div>
      <main>
        <RouterProvider router={router} />
      </main>
    </div>
  );
};

export default App;

