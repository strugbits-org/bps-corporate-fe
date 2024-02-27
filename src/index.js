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
import PortfolioPost from "./pages/dynamicPages/PortfolioPost";
import MarketPost from "./pages/dynamicPages/MarketPost";
import BlogPost from "./pages/dynamicPages/BlogPost";
import ServicePostPage from "./pages/dynamicPages/ServicePostPage";
import Blogs from "./common/Blogs";
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
        path: "blogs",
        element: <Blogs />,
      },       
      {
       
        path: "portfolio", 
        element: <Portfolio />,
      },
      {
        path: "services-post",
        element: <ServicePostPage />,
      },
      {
        path: "services-post/:id",
        element: <ServicePostPage />,
      },
      {
        path: "market-post/:id",
        element: <MarketPost />,
      },
      {
       
        path: "portfolio-post/:id", 
        element: <PortfolioPost />,
      },
      {
       
        path: "blog-post/:id", 
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
