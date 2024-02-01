import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';

const NoteEditorScreen = ({ route, navigation }) => {
    const [noteContent, setNoteContent] = useState(route.params?.noteContent || '');

    const handleSave = () => {
        // Handle save action, you may want to save the note content to your data store
        console.log('Note Saved:', noteContent);

        // Navigate back to the list screen
        navigation.goBack();
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.textInput}
                multiline
                placeholder="Enter your note here..."
                value={noteContent}
                onChangeText={(text) => setNoteContent(text)}
            />
            <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
                <Text style={styles.saveButtonText}>Save</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 16,
        paddingTop: 16,
    },
    textInput: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        padding: 10,
        marginBottom: 16,
    },
    saveButton: {
        backgroundColor: 'blue',
        paddingVertical: 12,
        borderRadius: 8,
        alignItems: 'center',
    },
    saveButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default NoteEditorScreen;
