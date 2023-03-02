import React, { useState } from "react";

const RegisterPage = () => {
  //

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  //

  async function register(e) {
    e.preventDefault();

    const response = await fetch("http://localhost:5000/register", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.status !== 200) {
      alert("Registration failed...");
    } else {
      alert("Successfully registered....");
    }
  }

  //
  return (
    <form className="register" onSubmit={register}>
      <h1>Register</h1>
      <input
        type="text"
        placeholder="Enter your username ..."
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password here..."
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button>Register</button>
    </form>
  );
};

export default RegisterPage;
