import React from "react";
import { View, StyleSheet } from "react-native";
import FeedTemplate from "../../components/templates/FeedTemplate";

const FeedScreen: React.FC = () => {
    const posts = [
        { id: '1', image: 'https://example.com/image1.jpg', likes: 100, comments: 5 },
        { id: '2', image: 'https://example.com/image2.jpg', likes: 150, comments: 10 },
    ];

    return (
        <View style={styles.container}>
            <FeedTemplate posts={posts} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f8f8f8",
    },
});

export default FeedScreen;