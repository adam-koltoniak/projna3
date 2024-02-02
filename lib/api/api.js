import axios from 'axios';
import Constants from "expo-constants";
const { manifest } = Constants;

const BASE_URL = Constants?.expoConfig?.hostUri
    ? Constants.expoConfig.hostUri.split(`:`).shift().concat(`:3000`)
    : `yourapi.com`;


const apiService = axios.create({
    baseURL: BASE_URL,
    timeout: 5000, // Set a timeout for requests (optional)
    headers: {
        'Content-Type': 'application/json',
    },
});

export const getAllNotes = async () => {
    console.log(BASE_URL)

    try {
        const response = await apiService.get('/api/notes');
        return response.data;
    } catch (error) {
        console.error('Error fetching notes:', error);
        throw error;
    }
};

export const getNoteById = async (id) => {
    try {
        const response = await apiService.get(`/api/notes/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching note by ID:', error);
        throw error;
    }
};

export const createNote = async (noteData) => {
    try {
        const response = await apiService.post('/api/notes', noteData);
        return response.data;
    } catch (error) {
        console.error('Error creating note:', error);
        throw error;
    }
};

export const updateNote = async (id, updatedNoteData) => {
    try {
        const response = await apiService.put(`/api/notes/${id}`, updatedNoteData);
        return response.data;
    } catch (error) {
        console.error('Error updating note:', error);
        throw error;
    }
};

export const deleteNote = async (id) => {
    try {
        const response = await apiService.delete(`/api/notes/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error deleting note:', error);
        throw error;
    }
};
