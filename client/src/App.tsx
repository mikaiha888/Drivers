import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/home/Home";

const App: React.FC = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
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

