import React, { useEffect, useState } from "react";
import { View, StyleSheet, ActivityIndicator, Alert } from "react-native";
import { Link } from "expo-router";
import FeedTemplate from "../../components/templates/FeedTemplate";
import { getPosts } from "../../controllers/postController";

interface Post {
    id: string;
    image: string;
    date: string;
    caption: string;
    likes: number;
    comments: number;
}

const FeedScreen: React.FC = () => {
    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const fetchedPosts: Post[] = await getPosts();
                const sortedPosts = fetchedPosts.sort(
                    (a: Post, b: Post) => new Date(b.date).getTime() - new Date(a.date).getTime()
                );
                setPosts(sortedPosts);
            } catch (error) {
                Alert.alert("Error", "No se pudieron cargar los posts.");
            } finally {
                setLoading(false);
            }
        };
        fetchPosts();
    }, []);

    if (loading) {
        return <ActivityIndicator size="large" color="#0000ff" />;
    }

    return (
        <View style={styles.container}>
            <Link href="./new" style={styles.button}>
                Nueva Publicación
            </Link>
            <FeedTemplate posts={posts} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f8f8f8",
        padding: 16,
    },
    button: {
        marginBottom: 16,
        padding: 10,
        backgroundColor: "#007bff",
        color: "#fff",
        textAlign: "center",
        borderRadius: 8,
    },
});

export default FeedScreen;
