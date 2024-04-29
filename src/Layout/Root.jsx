import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";
import Footer from "../shared/Footer/Footer";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
AOS.init();

function Root() {
  return (
    <div className="max-w-[90%] mx-auto font-rob mt-8 ">
      <Outlet />
      <Footer />
      <Toaster position="top-right" />
    </div>
  );
}

export default Root;
