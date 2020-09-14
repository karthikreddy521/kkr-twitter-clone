import React, {useEffect, useState} from 'react';
import "./Feed.css";
import Post from "./Post";
import TweetBox from "./TweeetBox";
import db from "./firebase";

function Feed() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        db.collection("posts").onSnapshot((snapshot) =>
            setPosts(snapshot.docs.map((doc) => doc.data()))
        );
    }, []);
    return (
         <div className="feed">
             <div className="feed__header">
                 <h2>Home</h2>
             </div>
            <TweetBox/>
             {posts.map(post => (
               <Post
                   displayName={post.displayName}
                   username={post.username}
                   image={post.image}
                   avatar={post.avatar}
                   text={post.text}/>
             ))}

         </div>
    );
}
export default Feed;