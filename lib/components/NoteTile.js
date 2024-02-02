import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const NoteTile = ({ title, onPressTitle, onDelete }) => {
    return (
        <View style={styles.tileContainer}>
            <TouchableOpacity onPress={onPressTitle}>
                <Text style={styles.title}>{title}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={onDelete} style={styles.deleteButton}>
                <Text style={styles.deleteButtonText}>Delete</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    tileContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
        padding: 10,
        marginVertical: 5,
        borderRadius: 8,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000000',
    },
    deleteButton: {
        backgroundColor: 'red',
        padding: 8,
        borderRadius: 5,
    },
    deleteButtonText: {
        color: 'white',
        fontSize: 14,
    },
});

export default NoteTile;
