import React, { useState } from "react";
import { Button, Navbar, NavbarBrand, NavbarToggle } from "flowbite-react";
import { Link, useNavigate } from "react-router-dom";

const AuthScreen = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  return (
    <div>
      <div
        style={{
          backgroundImage: `linear-gradient(to right, rgba(17, 24, 39, 0.9), rgba(17, 24, 39, 0.6)), url(/background.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "100vh",
        }}
        className="text-white"
      >
        {/* <div
          style={{
            backgroundImage: `linear-gradient(to right, rgba(17, 24, 39, 0.9), rgba(17, 24, 39, 0.6))`,
          }}
        > */}
        <Navbar container>
          <NavbarBrand href="/">
            <img
              src="/neo-movies-logo.png"
              className="mr-3 h-6 sm:h-9"
              alt="neo-movies-logo"
            />
            <span className="self-center whitespace-nowrap text-xl font-semibold text-white">
              Neo Movies
            </span>
          </NavbarBrand>
          <div className="flex md:order-2">
            <Link to="/signin">
              <Button color="light" className="text-black">
                Sign In
              </Button>
            </Link>
          </div>
        </Navbar>
        {/* </div> */}

        <div className="flex flex-col justify-center items-center text-center px-4 py-16 md:py-32">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 break-words lg:w-1/2 md:w-full">
            Unlimited movies, TV shows, and more
          </h1>
          <p className="text-lg md:text-xl mb-5">
            Starts at USD 2.99. Cancel anytime.
          </p>
          <p className="mb-6">
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>
          <div className="flex flex-col md:flex-row items-center gap-2 w-full max-w-md">
            <input
              type="email"
              placeholder="Email address"
              className="w-full md:w-2/3 px-4 py-2 rounded outline-none bg-black text-white"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <button
              className="bg-red-600 hover:bg-red-700 px-6 py-2 rounded text-white font-semibold"
              onClick={() => {
                if (!email || !/\S+@\S+\.\S+/.test(email)) {
                  alert("Please enter a valid email address.");
                  return;
                }
                navigate("/signup", { state: { email } });
              }}
            >
              Get Started
            </button>
          </div>
        </div>
        <div className="relative w-full overflow-hidden"></div>
      </div>
      <div
        className="relative"
        style={{
          backgroundColor: "#202e33",
        }}
      >
        <svg
          className="w-full h-[150px] absolute -top-30"
          viewBox="0 0 1440 150"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#202e33"
            d="M0,80 C480,130 960,30 1440,80 L1440,150 L0,150 Z"
          />
        </svg>
        <div className="px-4 py-6 container rounded">
          <h2 className="text-white text-2xl font-bold mb-4">Trending Now</h2>
          <div className="flex gap-8 overflow-x-auto no-scrollbar pl-4 mx-auto mt-3">
            {[1, 2, 3, 4, 5].map((num) => (
              <div key={num} className="relative min-w-[160px]">
                <img
                  src="/neo-movies-logo.png"
                  alt={`Trending ${num}`}
                  className="w-50 h-70 object-cover rounded-lg"
                />
                <div className="absolute z-20 bottom-8 -left-4 text-white font-extrabold text-[5rem] leading-none drop-shadow-lg">
                  {num}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthScreen;
