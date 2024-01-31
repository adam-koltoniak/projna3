import { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Dimensions,
  TextInput,
  ActivityIndicator,
  Pressable,
} from "react-native";
import { auth } from "./firebaseConfig";

import {
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  createUserWithEmailAndPassword,
} from "firebase/auth";

const { width, height } = Dimensions.get("window");
console.log(width, height);

export default function App() {
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      console.log("User is still logged in: ", user);
      if (user) {
        setUser(user);
      }
    });
  }, [user]);

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("User logged in successfully: ", userCredential);
        setUser(userCredential);
      })
      .catch((error) => {
        console.log("Error", error);
      });
  };

  const handleCreateUser = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("user logged in successfully: ", userCredential);
        setUser(userCredential);
      })
      .catch((error) => {
        console.log("Error", error);
      });
  };

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        console.log("User logged out successfully:");
        setUser(null);
      })
      .catch((error) => {
        console.log("Error", error);
      });
  };

  if (!user) {
    return (
      <View style={[styles.container]}>
        <Text style={styles.header}>Log In App</Text>
        <TextInput
          style={styles.inputText}
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          style={styles.inputText}
          placeholder="Password"
          secureTextEntry={true}
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        <Pressable onPress={handleLogin} style={styles.buttons}>
          <Text style={styles.buttonText}>Log In</Text>
        </Pressable>
        <Pressable onPress={handleCreateUser} style={styles.buttons}>
          <Text style={styles.buttonText}>Create User</Text>
        </Pressable>
        <Text styles={styles.text} type="black">
          {"\nYou Are Logged Out."}
        </Text>
      </View>
    );
  }

  if (user) {
    return (
      <View style={styles.container}>
        <Text style={[styles.text, { fontWeight: "bold" }]}>
          {"User is still logged in: \n\n"}
        </Text>
        <Text style={styles.text}>{"email: " + user?.email}</Text>
        <Text style={styles.text}>{"uid: " + user?.uid}</Text>
        <Text style={styles.text}>
          {"\nAccess Token:\n\n" + user?.accessToken}
        </Text>
        <Pressable onPress={handleLogout} style={styles.buttons}>
          <Text style={styles.buttonText}>Logout</Text>
        </Pressable>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#000",
    textAlign: "center",
    paddingHorizontal: 20,
  },
  buttons: {
    backgroundColor: "green",
    height: 40,
    width: "60%",
    borderRadius: 10,
    margin: 10,
  },
  buttonText: {
    fontSize: 25,
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
  },
  inputText: {
    fontSize: 25,
    textAlign: "center",
    fontWeight: "bold",
  },
  header: {
    fontSize: 30,
    textAlign: "center",
    fontWeight: "bold",
    color: "green",
    margin: 10,
  },
});