import React from "react";
import { View, Image } from 'react-native';
import globalStyles from "../styles/GlobalStyles";

interface UserAvatarProps {
    avatarUrl: string;
    size?: number;
}

const UserAvatar: React.FC<UserAvatarProps> = ({ avatarUrl, size = 40 }) => (
    <View style={[globalStyles.image, { width: size, height: size, borderRadius: size / 2 }]}>
        <Image source={{ uri: avatarUrl }} style={{ width: "100%", height: "100%" }} />
    </View>
);

export default UserAvatar;
