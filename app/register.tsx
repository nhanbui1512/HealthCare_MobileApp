import { Link } from "expo-router";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

export default function Register() {
  return (
    <View style={{ paddingTop: 50 }}>
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
          <Text style={{ fontSize: 40, textAlign: "center", marginBottom: 40 }}>
            SIGN UP
          </Text>
          <View style={{ paddingHorizontal: 20 }}>
            <Text style={{ marginLeft: 20, marginBottom: 10 }}>User name</Text>

            <TextInput
              placeholder="Username"
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
            <Text style={{ marginLeft: 20, marginBottom: 10 }}>Email</Text>
            <TextInput
              placeholder="Email"
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
            <Text style={{ marginLeft: 20, marginBottom: 10 }}>Password</Text>

            <TextInput
              placeholder="Password"
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
              placeholder="Confirm password"
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
            <View style={{ display: "flex", flexDirection: "row", gap: 5 }}>
              <Text>Already have an account?</Text>
              <Link href={"/"} style={{ fontWeight: "600" }}>
                Login
              </Link>
            </View>

            <TouchableOpacity style={{ marginTop: 30 }}>
              <View
                style={{
                  paddingVertical: 15,
                  paddingHorizontal: 30,
                  backgroundColor: "#000",
                }}
              >
                <Text style={{ color: "#fff", textAlign: "center" }}>
                  REGISTER
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
