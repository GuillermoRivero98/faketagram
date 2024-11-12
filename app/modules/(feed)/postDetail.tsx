import React, { useEffect, useState } from "react";
import { View, Text, Image, StyleSheet, ActivityIndicator } from "react-native";
import { useRoute, RouteProp } from "@react-navigation/native";
import { getPostById } from "../../controllers/postController";

type PostDetailRouteProps = RouteProp<{ params: { postId: string } }, "params">;

interface Post {
    id: string;
    image: string;
    date: string;
    caption: string;
}

const PostDetailScreen: React.FC = () => {
    const route = useRoute<PostDetailRouteProps>();
    const { postId } = route.params;
    const [post, setPost] = useState<Post | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const fetchedPost: Post = await getPostById(postId);
                setPost(fetchedPost);
            } catch (error) {
                console.error("Error al obtener el post:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchPost();
    }, [postId]);

    if (loading) {
        return <ActivityIndicator size="large" color="#0000ff" />;
    }

    if (!post) {
        return <Text>No se encontró la publicación.</Text>;
    }

    return (
        <View style={styles.container}>
            <Image source={{ uri: post.image }} style={styles.image} />
            <Text style={styles.caption}>{post.caption}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    image: {
        width: "100%",
        height: 300,
        borderRadius: 10,
    },
    caption: {
        marginTop: 10,
        fontSize: 18,
    },
});

export default PostDetailScreen;
