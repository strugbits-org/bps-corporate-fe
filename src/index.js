import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Blog from "./pages/Blog";
import Portfolio from "./pages/Portfolio";
import PageNotFound from "./pages/PageNotFound";
import PortfolioPost from "./pages/dynamicPages/portfolio-post";
import MarketPost from "./pages/dynamicPages/market-post";
import BlogPost from "./pages/dynamicPages/blog-post";
import ServicesPost from "./pages/dynamicPages/Service-post";
// import MemberPage from './pages/MemberPage';
// import PrivateRoute from './utilis/PrivateRoute';

const router = createBrowserRouter([
  {
    path: "*",
    element: <App />,
    errorElement: <PageNotFound />,
    children: [
      {
        path: "*",
        element: <Home />,
      },
      {
        path: "about",
        element: <AboutUs />,
      },
      {
        path: "contact",
        element: <ContactUs />,
      },
      {
        path: "blog",
        element: <Blog />,
      },      
      {
       
        path: "portfolio", 
        element: <Portfolio />,
      },
      {
        path: "service-post",
        element: <ServicesPost />,
      },
      {
        path: "market-post",
        element: <MarketPost />,
      },
      {
       
        path: "portfolio-post", 
        element: <PortfolioPost />,
      },
      {
       
        path: "blog-post", 
        element: <BlogPost/>,
      },
      //////////// private route start ///////////////////////
      // {
      //   element: <PrivateRoute/>,
      //   children:[
      //     {
      //       path: "member",
      //       element: <MemberPage/>,
      //     },

      //   ]
      // },
      ///////////// private route end   //////////////////////////////
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  // </React.StrictMode>
);
