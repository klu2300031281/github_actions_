import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");   // NEW
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:9098/signup", {
        username,
        email,       // NEW
        password,
      });

      if (res.data === "success") {
        alert("Account created!");
        navigate("/");
      } else {
        alert("Signup failed");
      }
    } catch (err) {
      alert("Error connecting to backend");
    }
  };

  return (
    <div className="app-container">
      <div className="login-box">
        <h1 className="logo">StreamFlix</h1>
        <h2>Create Account</h2>

        <form onSubmit={handleSignup} className="form">
          <input
            type="text"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
            required
          />

          <input
            type="email"
            placeholder="Gmail"
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit">Signup</button>
        </form>

        <p style={{ marginTop: "1rem" }}>
          Already have an account?{" "}
          <span
            style={{ color: "#e50914", cursor: "pointer", fontWeight: "bold" }}
            onClick={() => navigate("/")}
          >
            Sign In
          </span>
        </p>
      </div>
    </div>
  );
}
