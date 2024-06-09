"use client";
import React, { useEffect, useState } from "react";
import Head from "next/head";
import "./login.css";
import { useRouter } from "next/navigation";
// import { Button, Checkbox, Form, Input } from 'antd';

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  // Check if user is already logged in
  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (isLoggedIn) {
      router.push("/blog");
    }
  }, [router]);

  const handleSubmit = async () => {
    try {
      const response = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        // Set isLoggedIn to true in localStorage
        localStorage.setItem("isLoggedIn", "true");
        router.push("/blog");
      } else {
        alert("Tên người dùng hoặc mật khẩu không chính xác!");
      }
    } catch (error) {
      console.error("Login failed:", error);
      alert("Login failed. Please try again later.");
    }
  };

  return (
    <>
      <div className="px-16 pt-10 bg-white max-md:px-5">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[67%] max-md:ml-0 max-md:w-full">
            <div className="grow max-md:mt-10 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                <div className="flex flex-col w-[63%] max-md:ml-0 max-md:w-full">
                  <div className="flex z-10 flex-col text-black max-md:max-w-full">
                    <div className="text-xl font-semibold max-md:max-w-full">
                      Your Logo
                    </div>
                    <div className="flex flex-col self-end mt-64 text-base max-md:mt-10">
                      <div className="self-start ml-10 text-5xl font-semibold max-md:ml-2.5 max-md:text-4xl">
                        Sign in to{" "}
                      </div>
                      <div className="mt-6 text-4xl font-medium">
                        Lorem Ipsum is simply{" "}
                      </div>
                      <div className="mt-16 max-md:mt-10">
                        If you don’t have an account register
                      </div>
                      <div className="self-start mt-3.5 ml-14 text-indigo-700 max-md:ml-2.5">
                        You can{" "}
                        <span className="font-semibold text-indigo-700">
                          Register here !
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-[37%] max-md:ml-0 max-md:w-full">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/b852c498133868a73b20ac79d9ef197dcf9db2783b179373e79609913113633d?apiKey=33a64a0f93c2493da0447121a699bf7a&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/b852c498133868a73b20ac79d9ef197dcf9db2783b179373e79609913113633d?apiKey=33a64a0f93c2493da0447121a699bf7a&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b852c498133868a73b20ac79d9ef197dcf9db2783b179373e79609913113633d?apiKey=33a64a0f93c2493da0447121a699bf7a&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/b852c498133868a73b20ac79d9ef197dcf9db2783b179373e79609913113633d?apiKey=33a64a0f93c2493da0447121a699bf7a&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/b852c498133868a73b20ac79d9ef197dcf9db2783b179373e79609913113633d?apiKey=33a64a0f93c2493da0447121a699bf7a&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b852c498133868a73b20ac79d9ef197dcf9db2783b179373e79609913113633d?apiKey=33a64a0f93c2493da0447121a699bf7a&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/b852c498133868a73b20ac79d9ef197dcf9db2783b179373e79609913113633d?apiKey=33a64a0f93c2493da0447121a699bf7a&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/b852c498133868a73b20ac79d9ef197dcf9db2783b179373e79609913113633d?apiKey=33a64a0f93c2493da0447121a699bf7a&"
                    className="grow mt-154 w-full aspect-[0.63] max-md:mt-10"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col self-stretch my-auto font-medium max-md:mt-10">
              <div className="text-3xl text-black">Sign in</div>
              <div className="flex flex-col justify-center mt-8 text-base text-indigo-300">
                <input
                  className="justify-center items-start p-7 bg-indigo-50 rounded-lg max-md:px-5"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Enter email or user name"
                />
              </div>
              <input
                  className="flex gap-5 justify-between px-8 py-6 mt-10 text-base text-indigo-300 whitespace-nowrap bg-indigo-50 rounded-lg max-md:px-5"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
              />
              <div className="flex flex-col justify-center mt-12 text-base text-white whitespace-nowrap max-md:mt-10">
                <button onClick={handleSubmit} className="justify-center items-center px-16 py-6 bg-indigo-700 rounded-lg shadow-2xl max-md:px-5">
                  Login
                </button>
              </div>
              <div className="self-center mt-16 text-base text-zinc-400 max-md:mt-10">
                or continue with
              </div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/77d66e9ee4c06623f3d2d98ce94a2ce3ee9047e0af6e81ad741e9231253a9a2c?apiKey=33a64a0f93c2493da0447121a699bf7a&"
                className="self-center mt-12 max-w-full aspect-[3.85] w-[165px] max-md:mt-10"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
