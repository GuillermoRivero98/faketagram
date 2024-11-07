import React from "react";
import { Text as RNText, TextProps as RNTextProps } from 'react-native';
import globalStyles from "../styles/globalStyles";

interface TextProps extends RNTextProps {
    children: React.ReactNode;
}

const Text: React.FC<TextProps> = ({ children, style, ...props }) => {
    return (
        <RNText style={[globalStyles.text, style]} {...props}>
            {children}
        </RNText>
    );
};

export default Text;
