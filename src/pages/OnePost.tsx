import { useEffect, useState } from "react";
import  type {Props} from '../components/application-layout/Card'

export default function SinglePost() {
    const id = window.location.pathname.split("/").pop();
    const [post, setPost] = useState<Props | null>(null);

    useEffect(() => {
        fetch(`http://localhost:3005/posts/${id}`)
            .then((response) => response.json())
            .then((data) => setPost(data))
            .catch((error) => console.error("Error fetching post:", error));
    }, [id]);

    if (!post) return null;

    return (
        <div className="flexi">
            <div className="post">
                <img src={``} className="img" alt={post.name} />
                <p>{post.name}</p>
                <p>{post.description}</p>
            </div>
        </div>
    );
}