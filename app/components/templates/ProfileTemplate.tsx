import React from "react";
import { View, StyleSheet } from "react-native";
import ProfileHeader from "../ProfileHeader";
import FeedTemplate from "./FeedTemplate"; // Reutilizamos FeedTemplate para listar publicaciones

interface ProfileTemplateProps {
    username: string;
    profileImage: string;
    posts: { _id: string; image: string; likes: number; comments: number; }[];
    onEditProfile: () => void;
}

const ProfileTemplate: React.FC<ProfileTemplateProps> = ({ username, profileImage, posts, onEditProfile }) => (
    <View style={styles.container}>
        <ProfileHeader username={username} profileImage={profileImage} onEditProfile={onEditProfile} />
        <FeedTemplate posts={posts} /> {/* Reutilizamos FeedTemplate */}
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f0f0f0",
    },
});

export default ProfileTemplate;
