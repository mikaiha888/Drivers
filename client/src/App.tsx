import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/home/Home";
import Teams from "./pages/teams/Teams";
import Layout from "./pages/layout/Layout";
import Drivers from "./pages/drivers/Drivers";

const App: React.FC = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "home",
          element: <Home />,
        },
        {
          path: "drivers",
          element: <Drivers />,
        },
        {
          path: "teams",
          element: <Teams />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
