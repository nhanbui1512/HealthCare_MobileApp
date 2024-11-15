import firebase from "@react-native-firebase/app";
import { Platform } from "react-native";

// Your secondary Firebase project credentials for Android...
const androidCredentials = {
  clientId: "",
  appId: "",
  apiKey: "",
  databaseURL: "",
  storageBucket: "",
  messagingSenderId: "",
  projectId: "",
};

// Your secondary Firebase project credentials for iOS...
const iosCredentials = {
  clientId: "",
  appId: "",
  apiKey: "",
  databaseURL: "",
  storageBucket: "",
  messagingSenderId: "",
  projectId: "",
};

// Select the relevant credentials
const credentials = Platform.select({
  android: androidCredentials,
  ios: iosCredentials,
});

const config = {
  name: "SECONDARY_APP",
};

firebase.initializeApp(credentials, config);

const apps = firebase.apps;

apps.forEach((app) => {
  console.log("App name: ", app.name);
});
