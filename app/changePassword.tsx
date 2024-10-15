import { View, Text, TouchableOpacity, TextInput, Alert } from "react-native";
import React, { useState } from "react";
import { updatePassword } from "@/services/api/auth";
import { useRouter } from "expo-router";

export default function changePassword() {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const router = useRouter();

  const handleSubmit = () => {
    if (newPassword !== confirmPassword) {
      return Alert.alert("Error", "Confirm password does not match");
    }

    updatePassword({ oldPassword: oldPassword, newPassword: newPassword })
      .then((res) => {
        Alert.alert("Sucess", "Updated password");
        router.push("/dashboard/profile");
      })
      .catch((err) => {
        Alert.alert("Error", "Old password is incorrect");
      })
      .finally(() => {
        setOldPassword("");
        setConfirmPassword("");
        setNewPassword("");
      });
  };

  return (
    <View style={{}}>
      <View
        style={{
          width: "100%",
          paddingHorizontal: 20,
          display: "flex",
          justifyContent: "center",
          marginTop: 50,
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            paddingVertical: 20,
          }}
        >
          <View style={{ paddingHorizontal: 20 }}>
            <Text style={{ marginLeft: 20, marginBottom: 10 }}>
              Old password
            </Text>

            <TextInput
              value={oldPassword}
              onChangeText={(value) => setOldPassword(value)}
              secureTextEntry={true}
              style={{
                width: "100%",
                fontSize: 20,
                height: 50,
                backgroundColor: "#fff",
                borderRadius: 40,
                paddingHorizontal: 20,
                borderWidth: 1,
                borderColor: "#ded2b8",
                color: "rgb(58, 57, 103);",
                marginBottom: 20,
              }}
            />
            <Text style={{ marginLeft: 20, marginBottom: 10 }}>
              New password
            </Text>
            <TextInput
              value={newPassword}
              onChangeText={(value) => setNewPassword(value)}
              secureTextEntry={true}
              style={{
                width: "100%",
                fontSize: 20,
                height: 50,
                backgroundColor: "#fff",
                borderRadius: 40,
                paddingHorizontal: 20,
                borderWidth: 1,
                borderColor: "#ded2b8",
                color: "rgb(58, 57, 103);",
                marginBottom: 20,
              }}
            />
            <Text style={{ marginLeft: 20, marginBottom: 10 }}>
              Confirm password
            </Text>

            <TextInput
              value={confirmPassword}
              onChangeText={(value) => setConfirmPassword(value)}
              secureTextEntry={true}
              style={{
                width: "100%",
                fontSize: 20,
                height: 50,
                backgroundColor: "#fff",
                borderRadius: 40,
                paddingHorizontal: 20,
                borderWidth: 1,
                borderColor: "#ded2b8",
                color: "rgb(58, 57, 103);",
                marginBottom: 20,
              }}
            />

            <TouchableOpacity onPress={handleSubmit} style={{ marginTop: 30 }}>
              <View
                style={{
                  paddingVertical: 15,
                  paddingHorizontal: 30,
                  backgroundColor: "#186efb",
                  borderRadius: 8,
                }}
              >
                <Text
                  style={{
                    color: "#fff",
                    textAlign: "center",
                    fontWeight: "bold",
                  }}
                >
                  SAVE
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
