import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await axios.post("http://localhost:9098/login", {
        username,
        password,
      });

      if (res.data === "success") {
        navigate("/home");
      } else {
        alert("Invalid username or password");
      }
    } catch (err) {
      console.error(err);
      alert("Error connecting to backend");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app-container">
      <div className="login-box">
        <h1 className="logo">StreamFlix</h1>
        <h2>Sign In</h2>

        <form onSubmit={handleLogin} className="form">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit" disabled={loading}>
            {loading ? "Signing in..." : "Login"}
          </button>
        </form>

        {/* 🔹 Signup link added here */}
        <p style={{ marginTop: "1rem" }}>
          Don't have an account?{" "}
          <span
            style={{ color: "#e50914", cursor: "pointer", fontWeight: "bold" }}
            onClick={() => navigate("/signup")}
          >
            Sign Up
          </span>
        </p>
      </div>
    </div>
  );
}
