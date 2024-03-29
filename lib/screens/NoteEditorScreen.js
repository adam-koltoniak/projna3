import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import {createNote, getNoteById} from "../api/api";

const NoteEditorScreen = ({ route, navigation }) => {
    const handleSave = async (id) => {
        if(!id){
            await createNote({noteTitle, noteContent})
        }
        navigation.goBack();
    };

    const [noteTitle, setNoteTitle] = useState('');
    const [noteContent, setNoteContent] = useState('');

    return (
        <View style={styles.container}>
            {/* Title TextInput */}
            <TextInput
                style={styles.titleInput}
                placeholder="Enter note title..."
                value={noteTitle}
                onChangeText={(text) => setNoteTitle(text)}
            />

            {/* Content TextInput */}
            <TextInput
                style={styles.contentInput}
                multiline
                placeholder="Enter your note here..."
                value={noteContent}
                onChangeText={(text) => setNoteContent(text)}
            />

            {/* Save Button */}
            <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
                <Text style={styles.saveButtonText}>Save</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    titleInput: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 16,
        paddingHorizontal: 8,
    },
    contentInput: {
        flex: 1,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 16,
        paddingHorizontal: 8,
        textAlignVertical: 'top', // Allows vertical alignment for multiline TextInput
    },
    saveButton: {
        backgroundColor: 'blue',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
    },
    saveButtonText: {
        color: 'white',
    },
});

export default NoteEditorScreen;
