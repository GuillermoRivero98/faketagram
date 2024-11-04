import React from "react";
import { View, StyleSheet } from "react-native";
import Image from "./Image";
import Text from "./Text";
import Button from "./Button";

interface ProfileHeaderProps {
    username: string;
    profileImage: string;
    onEditProfile: () => void;
}

const ProfileHeader: React.FC<ProfileHeaderProps> = ({ username, profileImage, onEditProfile }) => (
    <View style={styles.header}>
        <Image source={{ uri: profileImage }} style={styles.profileImage} />
        <Text style={styles.username}>{username}</Text>
        <Button text="Edit Profile" onPress={onEditProfile} />
    </View>
);

const styles = StyleSheet.create({
    header: {
        alignItems: "center",
        padding: 20,
    },
    profileImage: {
        width: 80,
        height: 80,
        borderRadius: 40,
        marginBottom: 10,
    },
    username: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 10,
    },
});

export default ProfileHeader;