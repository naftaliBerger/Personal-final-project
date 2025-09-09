import { Link } from "react-router";

export default function Menu() {
  return (
    <div>
      <div>
      <h2>Welcome to the Linkodkod</h2>
        <Link to="/Login"><button>Login</button></Link> 
        <Link to="/Register"><button>Register</button></Link>
      </div>
    </div>
  )
}
