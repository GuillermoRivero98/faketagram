import React from "react";
import { View, Image, StyleSheet } from 'react-native';

interface UserAvatarProps {
    avatarUrl: string;
    size?: number;
}

const UserAvatar: React.FC<UserAvatarProps> = ({ avatarUrl, size = 40 }) => (
    <View style={[styles.container, { width: size, height: size }]}>
      <Image source={{ uri: avatarUrl }} style={styles.avatar} />
    </View>
  );

  
const styles = StyleSheet.create({
    container: {
        borderRadius: 999,
        overflow: 'hidden',
    },
    avatar: {
        width: '100%',
        height: '100%',
    },
});


export default UserAvatar;