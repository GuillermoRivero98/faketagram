import React from "react";
import { TouchableOpacity, Text, StyleSheet, GestureResponderEvent } from "react-native";


interface ButtonProps {
    text: string;
    onPress: (event: GestureResponderEvent) => void;
}

const Button: React.FC<ButtonProps> = ({ text, onPress }) => {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
      padding: 12,
      backgroundColor: '#3498db',
      borderRadius: 8,
      alignItems: 'center',
    },
    text: {
      color: '#fff',
      fontWeight: 'bold',
    },
  });


  export default Button;