import { Link } from "react-router";
import '../styls/Creation.css'
export default function Menu() {
  return (
    <div>
      <h2>Welcome to Linkodkod</h2>
      <div id="buttons">
      
        <Link to="/Login"><button>Login</button></Link> 
        <div>
        </div>
        <Link to="/Register"><button>Register</button></Link>
      </div>
    </div>
  )
}
