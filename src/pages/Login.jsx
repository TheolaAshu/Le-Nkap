import {} from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

  const response = await fetch("https//le-nkap-v1.onrender.com/users", {
      method: "Post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const res = await response.json();

    if (response.ok){
      console.log("success:", await response.json());
    }
    console.log("error:", res);
  };

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
            value={email}
            type="email"
            placeholder="Email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className="w-full py-4 bg-transparent text-black border-b border-black outline-none focus:outline-none"
          />
        </div>
        <div className="w-full flex flex-col">
          <input
          value={password}
            type="password"
            placeholder="Password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
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
