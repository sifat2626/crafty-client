import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";
import Footer from "../shared/Footer/Footer";

function Root() {
  return (
    <div className="max-w-[92%] mx-auto font-rob">
      <Outlet />
      <Footer />
      <Toaster position="top-right" />
    </div>
  );
}

export default Root;
