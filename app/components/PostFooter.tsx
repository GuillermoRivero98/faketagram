import React from "react";
import { View, StyleSheet } from "react-native";
import Icon from "./Icon";
import Text from "./Text";

interface PostFooterProps {
    likes: number;
    comments: number;
}

const PostFooter: React.FC<PostFooterProps> = ({ likes, comments }) => (
    <View style={styles.footer}>
        <Icon name="heart" style={styles.icon} />
        <Text style={styles.text}>{likes} likes</Text>
        <Icon name="comment" style={styles.icon} />
        <Text style={styles.text}>{comments} comments</Text>
    </View>
);

const styles = StyleSheet.create({
    footer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon: {
        marginRight: 5,
    },
    text: {
        fontWeight: 'bold',
    },
});

export default PostFooter;