import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const { pathname } = useLocation();

  console.log({ pathname });

  return (
    <aside className="px-10 py-15">
      <div className="w-[250px] shadow-xl overflow-hidden flex flex-col rounded-xl">
        <Link
          className={`py-4 w-full transition-all px-12 ${
            pathname === "/dashboard"
              ? "bg-teal-500 text-white"
              : "text-gray-500"
          }`}
          to={"/dashboard"}
        >
          Dashboard
        </Link>
        <Link
          className={`py-4 w-full transition-all px-12 ${
            pathname === "/dashboard/category"
              ? "bg-teal-500 text-white"
              : "text-gray-500"
          }`}
          to={"category"}
        >
          Category
        </Link>
        <Link
          className={`py-4 w-full transition-all px-12 ${
            pathname === "/dashboard/income"
              ? "bg-teal-500 text-white"
              : "text-gray-500"
          }`}
          to={"/dashboard/income"}
        >
          Income
        </Link>
        <Link
          className={`py-4 w-full transition-all px-12 ${
            pathname === "/dashboard/expenses"
              ? "bg-teal-500 text-white"
              : "text-gray-500"
          }`}
          to={"/dashboard/expenses"}
        >
          Expenses
        </Link>
      </div>
    </aside>
  );
};

export default Sidebar;
