import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
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
import { PersistGate } from "redux-persist/integration/react";
// import MemberPage from './pages/MemberPage';
// import PrivateRoute from './utilis/PrivateRoute';
import {store, persistor } from "./redux/store";


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
        path: "services-post/:slug",
        element: <ServicePostPage />,
      },
      {
        path: "market-post/:slug",
        element: <MarketPost />,
      },
      {
        path: "portfolio-post/:slug",
        element: <PortfolioPost />,
      },
      {
        path: "blog-post/:slug",
        element: <BlogPost />,
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
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <RouterProvider router={router} />
    </PersistGate>
  </Provider>
  // </React.StrictMode>
);
