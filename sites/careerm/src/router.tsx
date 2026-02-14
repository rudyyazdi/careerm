import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import Start from "./pages/Start";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Events from "./pages/Events";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "start",
        element: <Start />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "events",
        element: <Events />,
      },
    ],
  },
]);
