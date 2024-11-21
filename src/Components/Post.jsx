import { useState } from "react";
import "./Post.css";

const Post = ({caption, img_url}) => {
    const [likes, setLikes] = useState(0);
    return <div className="post">
            <img src={img_url} alt="Image not found"/>
            <div>
                <h3>{caption}</h3>
                <button onClick={() => {setLikes(likes+1)}}> {likes} LIKE </button>
            </div>
        </div>
}

export default Post;