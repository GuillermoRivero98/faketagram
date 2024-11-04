import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import Post from "./Post";

interface FeedListProps {
    posts: { id: string; image: string; likes: number; comments: number; }[];
}

const FeedList: React.FC<FeedListProps> = ({ posts }) => (
    <FlatList
        data={posts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Post image={item.image} likes={item.likes} comments={item.comments} />}
        contentContainerStyle={styles.container}
    />
);

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
});

export default FeedList;