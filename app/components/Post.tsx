import React from "react";
import { View, Image, StyleSheet } from "react-native";
import PostFooter from "./PostFooter";

interface PostProps {
    image: string;
    likes: number;
    comments: number;
}

const Post: React.FC<PostProps> = ({ image, likes, comments }) => (
    <View style={styles.post}>
        <Image source={{ uri: image }} style={styles.image} />
        <PostFooter likes={likes} comments={comments} />
    </View>
);

const styles = StyleSheet.create({
    post: {
        marginBottom: 15,
        backgroundColor: "#fff",
        borderRadius: 8,
        overflow: "hidden",
    },
    image: {
        width: "100%",
        height: 250,
    },
});

export default Post;