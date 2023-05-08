import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../actions/authActions";
import { useRouter } from "next/router";

const Login = () => {
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser({ identifier, password }));
  };

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-3xl mb-6">Login</h2>
      <form onSubmit={handleSubmit} className="w-full max-w-md">
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="identifier"
          >
            Email/Username
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="identifier"
            type="text"
            value={identifier}
            onChange={(e) => setIdentifier(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-end">
          <button
            className="bg-black hover:bg-gray-500 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Continue
          </button>
        </div>
      </form>
      <br />

      Don't have an account? Sign up{" "}
      <p
        className="text-black hover:text-gray-500 text-sm font-bold cursor-pointer"
        onClick={() => router.push("/register")}
      >
        here.
      </p>
    </div>
  );
};

export default Login;
