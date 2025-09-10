import { useEffect, useState } from "react";
import  type {Props} from '../components/application-layout/Card'
import { Link } from 'react-router';

export default function OnePost() {
    const id = window.location.pathname.split("/").pop();
    const [post, setPost] = useState<Props | null>(null);

    useEffect(() => {
        fetch(`http://localhost:3005/posts/${id}`)
            .then((response) => response.json())
            .then((data) => setPost(data))
            .catch((error) => console.error("Error fetching post:", error));
    }, []);

    if (!post) return null;

    return (
        <div>
            <div>
                <Link to="/Home"><button>Home</button></Link>
                <div>
                    <img src={`http://localhost:3005/${post.id}.png`} className="img" alt={post.name} />
                    <p>{post.name}</p>
                    <p>{post.description}</p>
                </div>
                
            </div>
        </div>
    );
}