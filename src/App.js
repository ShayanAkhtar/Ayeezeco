import "./App.css";
import Footer from "./Components/footer/Footer";
import "./Components/common-styles/index.css";
import AllRoutes from "./Routes/AllRoutes";
import { useLocation } from "react-router-dom";
import Navbar from "./Components/navbar/Navbar";
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

function App() {
  const location = useLocation();

  // Navbar should be transparent on both home and about pages
  const isWhite =
    location.pathname !== "/" &&
    location.pathname !== "/airticketing" &&
    location.pathname !== "/aboutus" &&
    location.pathname !== "/recreationaltours" &&
    location.pathname !== "/visaservices" &&
    location.pathname !== "/umrahpackages" &&
    location.pathname !== "/religioustour" &&
    location.pathname !== "/contactus" 
    ;

  return (
    <>
      <div className="App">
        <Navbar isWhiteBackground={isWhite} isOfferVisible={false} />
        <AllRoutes />
      </div>
      <Footer />
    </>
  );
}

export default App;
