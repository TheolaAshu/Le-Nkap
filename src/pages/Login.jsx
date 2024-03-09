import {} from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="w-full h-screen flex items-center flex-col gap-10 justify-center">
      <h2 className="text-5xl font-semibold text-teal-600">Tracky</h2>
      <div className="w-full bg-grey border rounded-xl p-6 flex flex-col gap-5 max-w-[700px]">
        <div className="w-full flex flex-colmax-w-[550px]">
          <div className="w-full flex flex-col gap-4">
            <h3 className="text-2xl font-semibold">Login</h3>
            <p className="text-base">Welcome back! please enter your details</p>
          </div>
        </div>
        <div className="w-full flex flex-col">
          <input
            type="email"
            placeholder="Email"
            className="w-full py-4 bg-transparent text-black border-b border-black outline-none focus:outline-none"
          />
        </div>
        <div className="w-full flex flex-col">
          <input
            type="password"
            placeholder="Password"
            className="w-full py-4 bg-transparent text-black border-b border-black outline-none focus:outline-none"
          />
        </div>

        <Link to={"/dashboard"}>
          <button
            className="w-full my-5 py-2 bg-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/50 text-white font-semibold rounded-lg"
            type="submit"
          >
            Login
          </button>
        </Link>
        <Link to={"/"}>
          <div>
            Dont have an account?{" "}
            <span className="font-semibold text-teal-600">Sign Up</span>
          </div>
        </Link>
      </div>
    </div>
  );
}
export default Login;
