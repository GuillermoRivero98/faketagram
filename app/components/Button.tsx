import React from "react";
import { TouchableOpacity, Text, GestureResponderEvent } from "react-native";
import globalStyles from "../styles/globalStyles";

interface ButtonProps {
    text: string;
    onPress: (event: GestureResponderEvent) => void;
}

const Button: React.FC<ButtonProps> = ({ text, onPress }) => {
    return (
        <TouchableOpacity style={globalStyles.button} onPress={onPress}>
            <Text style={globalStyles.buttonText}>{text}</Text>
        </TouchableOpacity>
    );
};

export default Button;
