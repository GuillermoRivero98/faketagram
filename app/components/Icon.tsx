import React from "react";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import { StyleProp, TextStyle, ViewStyle } from "react-native";

interface IconProps {
    name: string;
    size?: number;
    color?: string;
    style?: StyleProp<ViewStyle | TextStyle>;
}

const Icon: React.FC<IconProps> = ({ name, size = 24, color = "black", style }) => {
    return <FontAwesomeIcon name={name} size={size} color={color} style={style} />;
};

export default Icon;