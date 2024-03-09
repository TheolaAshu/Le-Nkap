import { Link, Outlet } from "react-router-dom";

import Sidebar from "../components/Sidebar";

function Dashboard() {
  return (
    <>
      <div className="mt-2 flex flex-col w-full">
        <header className="p-4 w-full flex shadow-xl justify-between px-10">
          <h2 className="text-2xl font-bold">Tracky</h2>
          <Link to={"/login"}>
            <button className="text-[1rem] bg-teal-500 p-4 py-3 text-white rounded-lg">
              Logout
            </button>
          </Link>
        </header>

        <div className="flex mt-10">
          <Sidebar />
          <div className="w-full">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
