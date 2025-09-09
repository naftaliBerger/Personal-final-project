import "../../styls/Headers.css";
import { Link } from "react-router";
export default function headers() {
  return (
    <>
      <div id="Header">
        <h1>Linkodkok</h1>
        <Link to="/Create"><button>Create a post🖋️</button></Link>
        <img id="logo" src="image.png" alt="" />
      </div>
    </>
  );
}
