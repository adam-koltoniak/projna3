import React, {useEffect, useState} from 'react';
import { SafeAreaView, FlatList, StyleSheet, TouchableOpacity, Text } from 'react-native';
import NoteTile from '../components/NoteTile';
import {
    signOut,
} from "firebase/auth";
import { auth } from "../../firebaseConfig";
import {deleteNote, getAllNotes} from "../api/api";

const NotesListScreen = ({ navigation }) => {
    const [notes, setNotes] = useState([]);


    useEffect(() => {
        // Example usage
        const notes = getAllNotes()
            .then((notes) => setNotes(notes))
            .catch((error) => console.error('Error fetching notes:', error));

        console.log(notes)
    }, []);

    const handlePressTitle = (item) => {
        navigation.navigate('NoteEditor', {item});
    };

    const handleDelete = (id) => {
        deleteNote(id).catch((error) => console.error('Error Deleting note:', error))
    };

    const handleAdd = () => {
        navigation.navigate('NoteEditor');
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
                data={notes}
                keyExtractor={(item) => item._id}
                renderItem={({ item }) => (
                    <NoteTile
                        title={item.title}
                        onPressTitle={() => handlePressTitle(item)}
                        onDelete={() => handleDelete(item._id)}
                    />
                )}
            />
            <TouchableOpacity style={styles.logoutButton} onPress={handleAdd}>
                <Text style={styles.logoutButtonText}>ADD</Text>
            </TouchableOpacity>
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
