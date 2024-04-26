import { Outlet } from "react-router-dom";

function Root() {
  return (
    <div className="max-w-[92%] mx-auto font-rob">
      <Outlet />
    </div>
  );
}

export default Root;
