import "../../styls/Card.css";
import { useState } from 'react';
export type Props = {
  src?: string;
  alt?: string;
  name: string;
  description: string;
  date: string;

};

export function Card(props: Props) {
    const [count, setCount] = useState(0);
    function increment() {
    setCount(prevCount => prevCount + 1);
  }
  return (
    <div className="profile-card">
      <img src={props.src} alt={props.alt || props.name} className="avatar" />
      <div className="name">{props.name}</div>
      <p className="description">{props.description}</p>
      <p>{props.date}</p>
      <button onClick={increment}>👍🏼 Like({count})</button>
    </div>
  );
}
