import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    setLoading(true);

    axios
      .post(
        "https://le-nkap-v1.onrender.com/auth",
        {
          email,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        console.log(response);
        localStorage.setItem("token", response.data);

        navigate("/dashboard");
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
        alert("Error login!");
        return;
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    if (localStorage.getItem("token") != null) {
      navigate("/dashboard");
    }
  }, [navigate]);

  return (
    <form
      onSubmit={handleLogin}
      className="w-full h-screen flex items-center flex-col gap-10 justify-center"
    >
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

        <button
          className="w-full my-5 py-2 bg-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/50 text-white font-semibold rounded-lg"
          type="submit"
        >
          {loading ? "Please wait..." : "Login"}
        </button>
        <Link to={"/"}>
          <div>
            Dont have an account?{" "}
            <span className="font-semibold text-teal-600">Sign Up</span>
          </div>
        </Link>
      </div>
    </form>
  );
}
export default Login;
