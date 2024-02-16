import Footer from "./layout/footer/Footer";
import { Outlet, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";
import Navbar from "./layout/header/Navbar";
import Loading from "./common/Loading";
import Chat from "./common/Chat";
import Cookies from "./common/Cookies";

function App() {
  const location = useLocation();
  const pathname =
    location.pathname.trim() == "/" ? "home" : location.pathname.substring(1); // Remove leading slash

  return (
    <div>
      <Loading />
      <Cookies />
      <Navbar />
      <Helmet>
        <title>BluePrint Studio</title>
        <meta
          name="description"
          content="Events are crucial for enhancing brand awareness, offering exclusive
           chances to showcase ideas, products, and services intimately."
        />

        <meta name="format-detection" content="telephone=no" />
        <meta property="og:title" content="Blueprint" />
        <meta name="description" content="" />
        <meta property="og:description" content="" />
        <meta name="keywords" content="" />
        <meta property="og:image" content="" />
        <meta property="og:image:width" content="800" />
        <meta property="og:image:height" content="800" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="" />
        <meta name="creator" content="Petrikór + Programatório" />
        <meta name="author" content="Blueprint" />
        <meta property="og:site_name" content="Blueprint" />
        <meta property="og:locale" content="en" />
        <link rel="canonical" href="" />
        <link rel="icon" type="image/png" href="images/favicon.png" />

        <script type="module" src="./js/app2.js"></script>
        <script type="module" src="./js/search.js"></script>
        <script type="module" src="./js/forms.js"></script>
        <script type="module" src="./js/chat.js"></script>
        <script type="module" src="./js/loader.js"></script>

        <link rel="stylesheet" href="./js/utils.css" />
        <link rel="stylesheet" href="./js/app.css" />
      </Helmet>

      <div id="main-transition">
        <div id={`pg-${pathname}`} className="wrapper" data-scroll-container>
          <main>
            <Outlet />
            <Footer />
          </main>
        </div>
      </div>

      <Chat />
    </div>
  );
}

export default App;