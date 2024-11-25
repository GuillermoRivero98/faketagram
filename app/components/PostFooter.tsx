import React from "react";
import { View } from "react-native";
import Icon from "./Icon";
import Text from "./Text";
import globalStyles from "../styles/GlobalStyles";

interface PostFooterProps {
    likes: number;
    comments: number;
}

const PostFooter: React.FC<PostFooterProps> = ({ likes, comments }) => (
    <View style={globalStyles.footer}>
        <Icon name="heart" style={globalStyles.footerText} />
        <Text style={globalStyles.footerText}>{likes} likes</Text>
        <Icon name="comment" style={globalStyles.footerText} />
        <Text style={globalStyles.footerText}>{comments} comments</Text>
    </View>
);

export default PostFooter;
