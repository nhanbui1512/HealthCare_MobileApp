import { View, Text, TouchableOpacity, TextInput } from "react-native";
import React from "react";

export default function changePassword() {
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

            <TouchableOpacity style={{ marginTop: 30 }}>
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
