import { Link} from "react-router";
import { useState } from "react";
import  Headers from '../components/application-layout/Headers'
export default function Create() {
  const [src, setSrc] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [message, setMessage] = useState<React.ReactNode>("");

  const handleCreate = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); 
    try {
      const response = await fetch("http://localhost:3005/createPosts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ src, name ,description }),
      });
      const data = await response.json();

      if (response.ok) {
        setMessage(<div>Registration successful! <Link to="/Login">Go to login</Link></div>);
      } else {
        setMessage((data.error));
      }
    } catch (err) {
      console.error(err);
      setMessage("network error");
    }
  };

  return (
    <div>
        <Headers />
        <Link to="/Home"><button>Home</button></Link>
    <form onSubmit={handleCreate}>
          <input type="text" placeholder="src" value={src} onChange={(e) => setSrc(e.target.value)} required />
          <input type="text" placeholder="name" value={name} onChange={(e) => setName(e.target.value)} required />
          <input type="text" placeholder="description" value={description} onChange={(e) => setDescription(e.target.value)} required />
          <div>
            <button type="submit">submit</button>
          </div>
        </form>
        {message}
    </div>
    
  )
}
