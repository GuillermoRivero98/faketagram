import React from "react";
import { View, StyleSheet } from "react-native";
import ProfileHeader from "../ProfileHeader";
import FeedList from "../FeedList"

interface ProfileTemplateProps {
    username: string;
    profileImage: string;
    posts: { id: string; image: string; likes: number; comments: number; }[];
    onEditProfile: () => void;
}

const ProfileTemplate: React.FC<ProfileTemplateProps> = ({ username, profileImage, posts, onEditProfile }) => (
    <View style={styles.container}>
        <ProfileHeader username={username} profileImage={profileImage} onEditProfile={onEditProfile} />
        <FeedList posts={posts} />
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f0f0f0",
    },
});

export default ProfileTemplate;