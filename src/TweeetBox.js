import React from 'react';
import "./TweetBox.css";
import {Avatar, Button} from "@material-ui/core";

function TweetBox() {
    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                    <Avatar src="https://api.adorable.io/avatars/285/abott@adorable.png"/>
                    <input
                        placeholder="What's happening?"
                        type="text"/>
                </div>
                    <input
                        className="tweetBox__imageinput"
                        placeholder="Opional: Enter image URL"
                        type="text"/>
                <Button className="tweetBox_tweetButton">Tweet</Button>
            </form>
        </div>
);
}
export default TweetBox;