import React from "react";
import { View, StyleSheet } from "react-native";
import Post from "../Post";

interface FeedTemplateProps {
    posts: Array<{
        id: string;
        image: string;
        likes: number;
        comments: number;
    }>;
}

const FeedTemplate: React.FC<FeedTemplateProps> = ({ posts }) => {
    return (
        <View style={styles.container}>
            {posts.map((post) => (
                <Post 
                    key={post.id}
                    image={post.image}
                    likes={post.likes}
                    comments={post.comments}
                />
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: "#f8f8f8",
    },
});

export default FeedTemplate;