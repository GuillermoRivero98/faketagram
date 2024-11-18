import React, { useEffect, useState } from "react";
import { View, Text, Image, TextInput, Button, FlatList, StyleSheet, ActivityIndicator, Alert, TouchableOpacity } from "react-native";
import { useRoute, RouteProp } from "@react-navigation/native";
import { getPostById } from "../../controllers/postController";
import { getComments, addComment, updateComment, deleteComment } from "../../controllers/commentsController";

type PostDetailRouteProps = RouteProp<{ params: { postId: string } }, "params">;

interface Post {
  id: string;
  image: string;
  date: string;
  caption: string;
}

interface Comment {
  id: string;
  content: string;
  createdAt: string;
  user: {
    name: string;
    id: string;
  };
}

const PostDetailScreen: React.FC = () => {
  const route = useRoute<PostDetailRouteProps>();
  const { postId } = route.params;
  const [post, setPost] = useState<Post | null>(null);
  const [comments, setComments] = useState<Comment[]>([]);
  const [loading, setLoading] = useState(true);
  const [newComment, setNewComment] = useState("");
  const [editingCommentId, setEditingCommentId] = useState<string | null>(null);
  const [editContent, setEditContent] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedPost = await getPostById(postId);
        setPost(fetchedPost);

        const fetchedComments = await getComments(postId);
        setComments(fetchedComments);
      } catch (error) {
        Alert.alert("Error", "No se pudieron cargar los detalles de la publicación.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [postId]);

  const handleAddComment = async () => {
    if (newComment.trim() === "") {
      Alert.alert("Error", "El comentario no puede estar vacío.");
      return;
    }

    try {
      const addedComment = await addComment(postId, newComment);
      setComments([addedComment, ...comments]);
      setNewComment("");
    } catch (error) {
      Alert.alert("Error", "No se pudo agregar el comentario.");
    }
  };

  const handleEditComment = async (commentId: string) => {
    try {
      const updatedComment = await updateComment(postId, commentId, editContent);
      setComments(comments.map(comment => comment.id === commentId ? updatedComment : comment));
      setEditingCommentId(null);
      setEditContent("");
    } catch (error) {
      Alert.alert("Error", "No se pudo actualizar el comentario.");
    }
  };

  const handleDeleteComment = async (commentId: string) => {
    Alert.alert("Eliminar comentario", "¿Estás seguro de que deseas eliminar este comentario?", [
      { text: "Cancelar", style: "cancel" },
      {
        text: "Eliminar",
        style: "destructive",
        onPress: async () => {
          try {
            await deleteComment(postId, commentId);
            setComments(comments.filter(comment => comment.id !== commentId));
          } catch (error) {
            Alert.alert("Error", "No se pudo eliminar el comentario.");
          }
        },
      },
    ]);
  };

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

      <View style={styles.commentsSection}>
        <Text style={styles.sectionTitle}>Comentarios</Text>
        <FlatList
          data={comments}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.comment}>
              <Text style={styles.commentUser}>{item.user.name}</Text>
              {editingCommentId === item.id ? (
                <>
                  <TextInput
                    style={styles.input}
                    value={editContent}
                    onChangeText={setEditContent}
                  />
                  <Button title="Guardar" onPress={() => handleEditComment(item.id)} />
                  <Button title="Cancelar" onPress={() => setEditingCommentId(null)} />
                </>
              ) : (
                <>
                  <Text>{item.content}</Text>
                  <TouchableOpacity onPress={() => { setEditingCommentId(item.id); setEditContent(item.content); }}>
                    <Text style={styles.editButton}>Editar</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => handleDeleteComment(item.id)}>
                    <Text style={styles.deleteButton}>Eliminar</Text>
                  </TouchableOpacity>
                </>
              )}
            </View>
          )}
        />
      </View>

      <View style={styles.addCommentSection}>
        <TextInput
          style={styles.input}
          placeholder="Agregar un comentario..."
          value={newComment}
          onChangeText={setNewComment}
        />
        <Button title="Comentar" onPress={handleAddComment} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  image: { width: "100%", height: 300, borderRadius: 10 },
  caption: { marginTop: 10, fontSize: 18 },
  commentsSection: { marginTop: 20 },
  sectionTitle: { fontSize: 16, fontWeight: "bold", marginBottom: 8 },
  comment: { paddingVertical: 8, borderBottomWidth: 1, borderBottomColor: "#ddd" },
  commentUser: { fontWeight: "bold" },
  editButton: { color: "blue", marginTop: 5 },
  deleteButton: { color: "red", marginTop: 5 },
  addCommentSection: { marginTop: 20 },
  input: { borderColor: "#ccc", borderWidth: 1, borderRadius: 5, padding: 8, marginBottom: 8 },
});

export default PostDetailScreen;
