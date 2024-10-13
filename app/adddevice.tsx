import { Link } from "expo-router";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

export default function AddDevice() {
  return (
    <View>
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
            <Text style={{ marginLeft: 20, marginBottom: 10 }}>Device id</Text>

            <TextInput
              placeholder="66f6b573592797ae3c370198"
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
              Device name
            </Text>
            <TextInput
              placeholder="Arduino"
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
              Serial Number
            </Text>

            <TextInput
              placeholder="Serial number"
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
                <Text style={{ color: "#fff", textAlign: "center" }}>
                  Add Device
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
