import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { signUp } from "../../utils/auth";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { Spinner } from "flowbite-react";

const SignUp = () => {
  const location = useLocation();
  const [name, setName] = useState("");
  const [email, setEmail] = useState(location.state.email || "");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    setIsLoading(true);
    e.preventDefault();

    if (password === confirmPassword) {
      const userInfo = { name, email, password };

      try {
        const res = await signUp(userInfo);
        console.log("res", res);
        if (!res.error) {
          localStorage.setItem("user", JSON.stringify(res.user));
          navigate("/home");
        }
      } catch (error) {
        console.log(error);
        alert("something wrong! try again.");
      } finally {
        setIsLoading(false);
      }
    } else {
      alert("passwords must be match");
    }
    // console.log("u clicked me");
  };

  return (
    <div>
      <div
        style={{
          backgroundImage: `linear-gradient(to right, rgba(17, 24, 39, 0.9), rgba(17, 24, 39, 0.6)), url(/neo-movies-logo.png)`,
        }}
      >
        <div className="flex items-center justify-center min-h-screen">
          <div
            className="max-w-md w-full p-6 rounded-lg shadow-lg"
            style={{
              backgroundImage: `linear-gradient(to right, rgba(17, 24, 39, 0.9), rgba(17, 24, 39, 0.6))`,
            }}
          >
            <h1 className="text-2xl font-semibold text-center text-gray-300 mt-6 mb-4">
              Sign Up
            </h1>
            <form onSubmit={handleSignUp}>
              <div className="mb-4">
                <label className="block mb-2 text-sm text-gray-300">
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullname"
                  name="fullname"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2 text-sm text-gray-300">
                  Email Address
                </label>
                <input
                  value={email}
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2 text-sm text-gray-300">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  required
                />
              </div>
              <div className="mb-6">
                <label className="block mb-2 text-sm text-gray-300">
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  onChange={(e) => {
                    setConfirmPassword(e.target.value);
                  }}
                  required
                />
              </div>
              <button
                type="submit"
                className="w-32 bg-gradient-to-r from-cyan-400 to-cyan-600 text-white py-2 rounded-lg mx-auto block focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 mb-2"
              >
                {isLoading ? (
                  <div>
                    <Spinner
                      aria-label="Spinner button example"
                      size="sm"
                      light
                    />
                    <span className="pl-3">Loading...</span>
                  </div>
                ) : (
                  <span>Register</span>
                )}
              </button>
            </form>
            <div className="text-center">
              <p className="text-sm text-gray-300">
                Already have an account?{" "}
                <Link to="/signin">
                  <span className="text-cyan-800 underline ">Log in</span>
                </Link>
              </p>
            </div>
            <p className="text-xs text-gray-400 text-center mt-6">
              &copy; 2023 Neo Movies
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
