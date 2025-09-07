import "../../styls/Card.css";
import { useState } from 'react';
type Props = {
  src?: string;
  alt?: string;
  name: string;
  description: string;
  dete:string;

};

export default function Card(props: Props) {
    const [count, setCount] = useState(0);
    function increment() {
    setCount(prevCount => prevCount + 1);
  }
  return (
    <div className="profile-card">
      <img src={props.src} alt={props.alt || props.name} className="avatar" />
      <div className="name">{props.name}</div>
      <p className="description">{props.description}</p>
      <p>{props.dete.toString()}</p>
      <button onClick={increment}>👍🏼 Lake({count})</button>
    </div>
  );
}
