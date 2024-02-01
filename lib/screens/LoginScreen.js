import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import {
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
    createUserWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../firebaseConfig";

const LoginScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        try {
            await signInWithEmailAndPassword(auth, email, password);
            // User successfully logged in
        } catch (error) {
            console.error('Error logging in:', error.message);
            // Handle login error (e.g., display an error message)
        }
    };

    const handleCreateAccount = async () => {
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            // User successfully created
        } catch (error) {
            console.error('Error creating account:', error.message);
            // Handle account creation error (e.g., display an error message)
        }
    };

    return (
        <View style={styles.container}>
            <Text>Login Screen - Add your login UI and logic here</Text>
            <TextInput
                style={styles.input}
                placeholder="Email"
                onChangeText={(text) => setEmail(text)}
                value={email}
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                secureTextEntry
                onChangeText={(text) => setPassword(text)}
                value={password}
            />
            <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.createAccountButton} onPress={handleCreateAccount}>
                <Text style={styles.buttonText}>Create Account</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
        width: 200,
    },
    loginButton: {
        backgroundColor: 'blue',
        padding: 10,
        borderRadius: 5,
        marginBottom: 10,
    },
    createAccountButton: {
        backgroundColor: 'green',
        padding: 10,
        borderRadius: 5,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
    },
});

export default LoginScreen;
