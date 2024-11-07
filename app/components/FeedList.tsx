import React from "react";
import { FlatList } from "react-native";
import Post from "./Post";
import globalStyles from "../styles/globalStyles";

interface FeedListProps {
    posts: { id: string; image: string; likes: number; comments: number }[];
}

const FeedList: React.FC<FeedListProps> = ({ posts }) => (
    <FlatList
        data={posts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Post image={item.image} likes={item.likes} comments={item.comments} />}
        contentContainerStyle={globalStyles.container}
    />
);

export default FeedList;
