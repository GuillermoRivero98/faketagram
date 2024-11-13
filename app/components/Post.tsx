import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import PostFooter from "./PostFooter";
import globalStyles from "../styles/globalStyles";

interface PostProps {
    image: string;
    likes: number;
    comments: number;
    caption: string;
    date: string;
}

const Post: React.FC<PostProps> = ({ image, likes, comments, caption, date }) => (
    <View style={globalStyles.postCard}>
        <Image source={{ uri: image }} style={globalStyles.image} />
        <Text style={styles.date}>{date}</Text>
        <Text style={styles.caption}>{caption}</Text>
        <PostFooter likes={likes} comments={comments} />
    </View>
);

const styles = StyleSheet.create({
    date: {
        fontSize: 12,
        color: "#555",
        margin: 5,
    },
    caption: {
        fontSize: 16,
        color: "#333",
        margin: 5,
    },
});

export default Post;
