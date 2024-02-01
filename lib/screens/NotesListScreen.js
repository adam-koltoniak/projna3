import React from 'react';
import { SafeAreaView, FlatList, StyleSheet, TouchableOpacity, Text } from 'react-native';
import NoteTile from '../components/NoteTile';
import {
    signOut,
} from "firebase/auth";
import { auth } from "../../firebaseConfig";

const NotesListScreen = ({ navigation }) => {
    const data = [
        { id: '1', title: 'Note 1' },
        { id: '2', title: 'Note 2' },
        // Add more notes as needed
    ];

    const handlePressTitle = (id) => {
        // Navigate to the NoteEditorScreen with the note content
        navigation.navigate('NoteEditor', { noteContent: 'Load note content based on ID or create new note' });
    };

    const handleDelete = (id) => {
        // Handle delete button press action
        console.log('Delete Pressed for Note ID:', id);
    };

    const handleLogout = async () => {
        try {
            await signOut(auth);
            // User successfully signed out
            // Navigate to the login screen or any other appropriate screen
            navigation.navigate('Login');
        } catch (error) {
            console.error('Error signing out:', error.message);
            // Handle sign-out error (e.g., display an error message)
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={data}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <NoteTile
                        title={item.title}
                        onPressTitle={() => handlePressTitle(item.id)}
                        onDelete={() => handleDelete(item.id)}
                    />
                )}
            />
            <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
                <Text style={styles.logoutButtonText}>Logout</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 16,
        paddingTop: 16,
    },
    logoutButton: {
        backgroundColor: 'red',
        paddingVertical: 12,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 16,
    },
    logoutButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default NotesListScreen;
