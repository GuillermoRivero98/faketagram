import React from "react";
import { View, StyleSheet } from "react-native";
import Image from "./Image";
import Text from "./Text"
import UserAvatar from "./UserAvatar";
import PostFooter from "./PostFooter"

interface CardProps {
    imageUrl: string;
    username: string;
    description: string;
    avatarUrl: string;
}

const Card: React.FC<CardProps> = ({ imageUrl, username, description, avatarUrl }) => (
    <View style={styles.card}>
      <View style={styles.header}>
        <UserAvatar avatarUrl={avatarUrl} />
        <Text>{username}</Text>
      </View>
      <Image source={{ uri: imageUrl }} style={styles.image} />
      <Text>{description}</Text>
      <PostFooter likes={0} comments={0} /> 
    </View>
  );


const styles = StyleSheet.create({
    card: {
        borderWidth: 1,
        borderColor: 'black',
        padding: 10,
        margin: 10,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    image: {
        width: '100%',
        height: 200,
    },
});


export default Card;