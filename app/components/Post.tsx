import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import PostFooter from "./PostFooter";
import globalStyles from "../styles/GlobalStyles";

// Definimos el tipo de los datos que representa una publicación
interface PostProps {
  post: {
    image: string;
    likes: number;
    comments: number;
    caption: string;
    date: string;
  };
}

const Post: React.FC<PostProps> = ({ post }) => (
  <View style={globalStyles.postCard}>
    <Image source={{ uri: post.image }} style={globalStyles.image} />
    <Text style={styles.date}>{post.date}</Text>
    <Text style={styles.caption}>{post.caption}</Text>
    <PostFooter likes={post.likes} comments={post.comments} />
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
