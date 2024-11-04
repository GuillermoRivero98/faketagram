import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import Input from "../../components/Input";
import Button from "../../components/Button";
import Text from "../../components/Text";
import useAuth from "../../hooks/useAuth"; 

const ProfileScreen: React.FC = () => {
    const { user } = useAuth(); 
    const [username, setUsername] = useState(user?.username || ""); 

    const handleSave = () => {
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Edit Profile</Text>
            <Input 
                placeholder="Username" 
                value={username}
                onChangeText={setUsername}
            />
            <Button text="Save" onPress={handleSave} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
});

export default ProfileScreen;
