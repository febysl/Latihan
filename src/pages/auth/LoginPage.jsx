import React, { useState } from "react";
import { useLoginUser } from "../../service/auth/login-user";
import { Link } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";

export const LoginPage = () => {
  const [Password, setPassword] = useState("");
  const [Email, setEmail] = useState("");

  const { mutate: loginUser, isSuccess, error } = useLoginUser();

  const handleInput = (e) => {
    if (e) {
      if (e.target.id === "email") {
        setEmail(e.target.value);
      }
      if (e.target.id === "password") {
        setPassword(e.target.value);
      }
    }
  };

  if (error) {
    console.log(error.response.data.message, "ini errorrrrrrrrrrrr");
  }

  const login = () => {
    loginUser({
      email: Email,
      password: Password,
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md p-6 bg-white rounded shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Login</h2>
        <div className="mb-4">
          <label className="block text-gray-600 text-sm font-medium">
            Email:
          </label>
          <input
            onChange={handleInput}
            id="email"
            type="email"
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-600 text-sm font-medium">
            Password:
          </label>
          <input
            onChange={handleInput}
            id="password"
            type="password"
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <button
          onClick={login}
          className="w-full bg-red-300 text-white font-semibold p-2 rounded hover:bg-red-400"
        >
          Login
        </button>
        <div>
          <span className="flex justify-center">or</span>
        </div>
        <div>
          <GoogleLogin
            onSuccess={(credentialResponse) => {
              console.log(credentialResponse);
            }}
            onError={() => {
              console.log("Login Failed");
            }}
          />
        </div>
        <div className="flex">
          <p>
            Gapunya akun?
            <span className="text-red-400">
              <Link to={"/register"}> Register</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};
