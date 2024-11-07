import React from 'react';
import { TextInput, TextInputProps } from 'react-native';
import globalStyles from "../styles/globalStyles";

interface InputProps extends TextInputProps {}

const Input: React.FC<InputProps> = (props) => {
    return <TextInput style={globalStyles.input} {...props} />;
};

export default Input;
