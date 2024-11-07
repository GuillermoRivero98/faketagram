import React from "react";
import { View, Image } from "react-native";
import PostFooter from "./PostFooter";
import globalStyles from "../styles/globalStyles";

interface PostProps {
    image: string;
    likes: number;
    comments: number;
}

const Post: React.FC<PostProps> = ({ image, likes, comments }) => (
    <View style={globalStyles.postCard}>
        <Image source={{ uri: image }} style={globalStyles.image} />
        <PostFooter likes={likes} comments={comments} />
    </View>
);

export default Post;
