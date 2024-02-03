import React, {useEffect, useState} from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import {getNoteById} from "../api/api";

const NoteTile = ({ item, onPressTitle, onDelete }) => {
    const [data, setData ] =useState(undefined)

    useEffect(() => {
        getNoteById(item._id).then((result) => setData(result))
            .catch((err) => console.error(err))
    }, [])

    return (
        <View style={styles.tileContainer}>
            <TouchableOpacity onPress={onPressTitle}>
                <Text style={styles.title}>{data?.title ?? 'Blad'}</Text>
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
