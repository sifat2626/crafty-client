import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";

function Root() {
  return (
    <div className="max-w-[92%] mx-auto font-rob">
      <Outlet />
      <Toaster position="top-right" />
    </div>
  );
}

export default Root;
