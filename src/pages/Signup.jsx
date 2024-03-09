import { useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    setLoading(true);

    const response = await fetch("https://le-nkap-v1.onrender.com/users", {
      method: "Post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        phone: phoneNumber,
        password,
        passwordConfirmation: confirmPassword,
      }),
    });

    if (!response.ok) {
      setLoading(false);
      alert("Error signing up, please ensure data is correct!");
      return;
    }

    const res = await response.json();

    if (response.ok) {
      setLoading(false);
      console.log("success:", res);
      navigate("/login");
      return;
    }
  };

  useEffect(() => {
    if (localStorage.getItem("token") != null) {
      navigate("/dashboard");
    }
  }, [navigate]);

  return (
    <form
      onSubmit={handleRegister}
      className="w-full h-screen flex items-center flex-col gap-10 justify-center"
    >
      <h2 className="text-5xl font-semibold text-teal-600">Tracky</h2>
      <div className="w-full bg-grey border rounded-xl p-6 flex flex-col gap-5 max-w-[700px]">
        <div className="w-full flex flex-colmax-w-[550px]">
          <div className="w-full flex flex-col gap-4">
            <h3 className="text-2xl font-semibold">Signup</h3>
            <p className="text-base">Welcome back! please enter your details</p>
          </div>
        </div>
        <div className="w-full flex flex-col">
          <input
            value={name}
            type="text"
            placeholder="Full name"
            onChange={(e) => {
              setName(e.target.value);
            }}
            className="w-full py-4 bg-transparent text-black border-b border-black outline-none focus:outline-none"
          />
        </div>
        <div className="w-full flex flex-col">
          <input
            value={email}
            required
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
            value={phoneNumber}
            required
            type="text"
            onChange={(e) => {
              setPhoneNumber(e.target.value);
            }}
            placeholder="Phone number"
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
        <div className="w-full flex flex-col">
          <input
            value={confirmPassword}
            type="password"
            placeholder="Confirm Password"
            onChange={(e) => {
              setConfirmPassword(e.target.value);
            }}
            className="w-full py-4 bg-transparent text-black border-b border-black outline-none focus:outline-none"
          />
        </div>{" "}
        <button
          className="w-full my-5 py-2 bg-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/50 text-white font-semibold rounded-lg"
          type="submit"
        >
          {loading ? "Loading..." : "Signup"}
        </button>
        <Link to={"/login"}>
          <div>
            Already have an account?{" "}
            <span className="font-semibold text-teal-600">Login</span>
          </div>
        </Link>
      </div>
    </form>
  );
}
export default Signup;
