import React from "react";
import { View } from "react-native";
import Image from "./Image";
import Text from "./Text";
import Button from "./Button";
import globalStyles from "../styles/GlobalStyles";

interface ProfileHeaderProps {
    username: string;
    profileImage: string;
    onEditProfile: () => void;
}

const ProfileHeader: React.FC<ProfileHeaderProps> = ({ username, profileImage, onEditProfile }) => (
    <View style={globalStyles.container}>
        <Image source={{ uri: profileImage }} style={globalStyles.image} />
        <Text style={globalStyles.heading}>{username}</Text>
        <Button text="Edit Profile" onPress={onEditProfile} />
    </View>
);

export default ProfileHeader;
