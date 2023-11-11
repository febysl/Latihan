import React, { useState } from 'react';
import { useCreateUser } from '../../service/auth/register-user';

export const Register = () => {
  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");
  const [Email, setEmail] = useState(" ");

  const { mutate: registerUser, isSuccess, error } = useCreateUser();

  const handleInput = (e) => {
    if (e) {
      if (e.target.id === 'username') {
        setUsername(e.target.value);
      }
      if (e.target.id === 'email') {
        setEmail(e.target.value);
      }
      if (e.target.id === 'password') {
        setPassword(e.target.value);
      }
    }
  }

  if (error) {
    console.log(error.response.data.message, 'ini errorrrrrrrrrrrr');
  }

  const register = () => {
    registerUser({
      email: Email,
      name: Username,
      password: Password,
    });
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md p-6 bg-white rounded shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Register</h2>
        <div className="mb-4">
          <label className="block text-gray-600 text-sm font-medium">Username:</label>
          <input
            onChange={handleInput}
            id="username"
            type="text"
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-600 text-sm font-medium">Email:</label>
          <input
            onChange={handleInput}
            id="email"
            type="email"
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-600 text-sm font-medium">Password:</label>
          <input
            onChange={handleInput}
            id="password"
            type="password"
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <button
          onClick={register}
          className="w-full bg-red-300 text-white font-semibold p-2 rounded hover:bg-red-400"
        >
          Register
        </button>
      </div>
    </div>
  );
};
