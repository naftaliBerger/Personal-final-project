import { useState } from "react";
import { Link, useNavigate } from "react-router"; 
export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState<React.ReactNode>("");

  const navigate = useNavigate(); 

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3005/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();
      console.log(data);
      if (response.ok) {
        localStorage.setItem("token", data.token);
        navigate("/Home"); 
      } else {
        setMessage(data.error);
      }
    } catch (err) {
      console.error(err);
      setMessage("network error");
    }
  };

  return (
    <div>
      <div id="spacious">
        <Link to="/"><button>Menu</button></Link>--
        <Link to="/Register"><button>Register</button></Link>
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <input type="text" placeholder="username" value={username} onChange={(e) => setUsername(e.target.value)} required />

          <input type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        
          <div>
            <button type="submit">submit</button>
          </div>
        </form>
        {message}
      </div>
    </div>
  );
}
