import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Services from "../pages/Services/Services";
import Portfolio from "../pages/Portfolio/Portfolio";
import Team from "../pages/Team/Team";
import Contact from "../pages/Contact/Contact";

export const router = createBrowserRouter([
     {
          path: "/",
          element: <MainLayout />,
          children: [
               {
                    index: true,
                    element: <Home></Home>
               },
               {
                    path: '/about',
                    element:<About />,
               },
               {
                    path: '/services',
                    element:<Services />,
               },
               {
                    path: '/portfolio',
                    element:<Portfolio />,
               },
               {
                    path: '/team',
                    element:<Team />,
               },
               {
                    path: '/contact',
                    element:<Contact />,
               },
          ]
     },
]);
