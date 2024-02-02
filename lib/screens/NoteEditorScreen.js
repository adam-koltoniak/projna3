import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import {createNote, updateNote} from "../api/api";

const NoteEditorScreen = ({ route, navigation }) => {
    const { item } = route.params ?? {};

    const [noteTitle, setNoteTitle] = useState(item?.title);
    const [noteContent, setNoteContent] = useState(item?.content);

    const handleSave = async () => {
        console.log(item?._id)
        if(item?._id){
            await createNote({title, content})
        }else{
            await updateNote(item._id, {title, content})
        }
        navigation.navigate('NotesList');
    };

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
