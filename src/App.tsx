import  Headers from './components/application-layout/Headers'
import type {Props} from './components/application-layout/Card'
import {Card} from './components/application-layout/Card'
// import posts from './db/db.json'
import { useEffect, useState } from "react";

import './App.css'

export default function App() {
  const [posts, setPosts] = useState<Props[]>([]);
  useEffect(() => {
        fetch("http://localhost:3005/posts")
            .then((response) => response.json())
            .then((data) => setPosts(data))
            .catch((error) => console.error("Error fetching posts:", error));
    }, []);
  return (

    <div className="container">
      <Headers />
      <ul>
            {posts.map((post:Props) => (
              
                <Card
                  src={post.src}
                  name={post.name}
                  description={post.description}
                  date={post.date}
                />
              
            ))}
        </ul>
    </div>
    
  )
}

