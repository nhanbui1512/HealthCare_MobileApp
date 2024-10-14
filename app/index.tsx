import { Login } from "@/services/api/auth";
import { Link, useRouter } from "expo-router";
import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Index() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    const storeToken = async (token: string) => {
      try {
        await AsyncStorage.setItem("accessToken", token);
      } catch (error) {
        console.log("Lưu token thất bại", error);
      }
    };

    Login({ email: email, password: password })
      .then((res) => {
        storeToken(res.user?.token);
        router.replace("/dashboard");
      })
      .catch((err) => {
        alert("Email or password incorrect");
      });
  };
  return (
    <View style={{ paddingTop: 50 }}>
      <View
        style={{
          width: "100%",
          paddingHorizontal: 20,
          display: "flex",
          justifyContent: "center",
          marginTop: 200,
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
            SIGN IN
          </Text>
          <View style={{ paddingHorizontal: 20 }}>
            <TextInput
              value={email}
              onChangeText={(value) => setEmail(value)}
              placeholderTextColor={"#888"}
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
                marginBottom: 20,
              }}
            />

            <TextInput
              value={password}
              onChangeText={(value) => setPassword(value)}
              placeholderTextColor={"#888"}
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
            <View style={{ display: "flex", flexDirection: "row", gap: 5 }}>
              <Text>Don't have an account?</Text>
              <Link href={"/register"} style={{ fontWeight: "600" }}>
                Register Here
              </Link>
            </View>

            <TouchableOpacity onPress={handleLogin} style={{ marginTop: 30 }}>
              <View
                style={{
                  paddingVertical: 15,
                  paddingHorizontal: 30,
                  backgroundColor: "#000",
                  borderRadius: 8,
                }}
              >
                <Text style={{ color: "#fff", textAlign: "center" }}>
                  LOGIN
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
