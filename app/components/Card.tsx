import React from "react";
import { View } from "react-native";
import Image from "./Image";
import Text from "./Text";
import UserAvatar from "./UserAvatar";
import PostFooter from "./PostFooter";
import globalStyles from "../styles/GlobalStyles";

interface CardProps {
    imageUrl: string;
    username: string;
    description: string;
    avatarUrl: string;
}

const Card: React.FC<CardProps> = ({ imageUrl, username, description, avatarUrl }) => (
    <View style={globalStyles.postCard}>
        <View style={globalStyles.footer}>
            <UserAvatar avatarUrl={avatarUrl} />
            <Text>{username}</Text>
        </View>
        <Image source={{ uri: imageUrl }} style={globalStyles.image} />
        <Text style={globalStyles.text}>{description}</Text>
        <PostFooter likes={0} comments={0} />
    </View>
);

export default Card;
