import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {
    onAuthStateChanged,
} from "firebase/auth";
import { auth } from "./firebaseConfig";
import LoginScreen from './lib/screens/LoginScreen';
import NotesListScreen from "./lib/screens/NotesListScreen";
import NoteEditorScreen from "./lib/screens/NoteEditorScreen";

const Stack = createStackNavigator();

const AppMain = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (authUser) => {
            setUser(authUser);
        });

        return () => unsubscribe();
    }, []);

    return (
        <NavigationContainer>
            <Stack.Navigator>
                {user ? (
                    <>
                        <Stack.Screen name="NotesList" component={NotesListScreen} />
                        <Stack.Screen name="NoteEditor" component={NoteEditorScreen} />
                    </>
                ) : (
                    <Stack.Screen name="Login" component={LoginScreen} />
                )}
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppMain;
