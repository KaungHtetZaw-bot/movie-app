import React, { useState } from "react";
import { Link } from "react-router-dom";
import { signIn } from "../../utils/auth";
import { useNavigate } from "react-router-dom";
import { Spinner } from "flowbite-react";

const SignIn = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSignIn = async (e) => {
    setIsLoading(true);
    e.preventDefault();
    const logInInfo = { email, password };
    console.log("sign in");
    try {
      const res = await signIn(logInInfo);
      console.log("sign in", res);
      if (res.success) {
        localStorage.setItem("user", JSON.stringify(res.user));
        navigate("/home");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
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
            className="max-w-md md:w-full w-3/4 p-6 md:p-8 rounded-lg shadow-lg"
            style={{
              backgroundImage: `linear-gradient(to right, rgba(17, 24, 39, 0.9), rgba(17, 24, 39, 0.6))`,
            }}
          >
            <h1 className="text-2xl font-semibold text-center text-gray-300 mt-6 mb-4">
              Log In
            </h1>
            <form onSubmit={handleSignIn}>
              <div className="mb-4">
                <label className="block mb-2 text-sm text-gray-300">
                  Email
                </label>
                <input
                  type="text"
                  id="identifier"
                  name="identifier"
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
              <p className="text-right text-sm text-cyan-400 hover:underline cursor-pointer m-2">
                Forgot Password?
              </p>
              <button
                type="submit"
                className="w-32 bg-gradient-to-r from-cyan-400 to-cyan-600 text-white py-2 rounded-lg mx-auto block focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 mb-2"
              >
                {!isLoading ? (
                  <span>Log In</span>
                ) : (
                  <div>
                    <Spinner
                      aria-label="Spinner button example"
                      size="sm"
                      light
                    />
                    <span className="pl-3">Loading...</span>
                  </div>
                )}
              </button>
            </form>
            <div className="text-center">
              <p className="text-sm text-gray-300">
                Don’t have an account?{" "}
                <Link to="/signup">
                  <span className="text-cyan-800 underline ">Sign Up</span>
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

export default SignIn;
