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
      router.push("/homePage");
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
        router.push("/homePage");
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
      <div className="login1-container">
        <Head>
          <title>exported project</title>
        </Head>
        <div className="login1-login1">
          <div className="login1-group11">
            <div className="login1-group3">
              <div>
                <span className="login1-text">
                  <span>
                    Sign in to
                    <span
                      dangerouslySetInnerHTML={{
                        __html: " ",
                      }}
                    />
                  </span>
                </span>
                <span className="login1-text02">
                  <span>
                    Lorem Ipsum is simply
                    <span
                      dangerouslySetInnerHTML={{
                        __html: " ",
                      }}
                    />
                  </span>
                </span>
              </div>
              <div>
                <span className="login1-text04">
                  <span>If you don’t have an account register</span>
                </span>
                <span className="login1-text06">
                  <span className="login1-text07">
                    You can
                    <span
                      dangerouslySetInnerHTML={{
                        __html: " ",
                      }}
                    />
                  </span>
                  <span>Register here !</span>
                </span>
              </div>
            </div>
            <div className="login1-saly14">
              <img
                src="/saly14210-aus-400w.png"
                alt="Saly14210"
                className="login1-saly141"
              />
            </div>
          </div>
          <div className="loginContainer">
            <h2>Đăng nhập</h2>
            <form className="loginForm" onSubmit={handleSubmit}>
              <label>Tên người dùng:</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username"
              />
              <label>Mật khẩu:</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
              />
              <button type="submit">Đăng nhập</button>
            </form>
          </div>
          <span className="login1-text21">
            <span>Your Logo</span>
          </span>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
