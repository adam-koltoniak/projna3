import { initializeApp } from "firebase/app"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { getReactNativePersistence, initializeAuth } from "firebase/auth"

export const firebaseApp = initializeApp({
apiKey: "AIzaSyAbGZP2i90dRHVf_YPB4DsjZ1xtci3y2KU",
authDomain: "projekt3-e9a99.firebaseapp.com",
projectId: "projekt3-e9a99",
storageBucket: "projekt3-e9a99.appspot.com",
messagingSenderId: "404237592093",
appId: "1:404237592093:web:8754c5f2dd78dcb4c048f4"
})

export const auth = initializeAuth(firebaseApp, {
    persistence: getReactNativePersistence(AsyncStorage),
})