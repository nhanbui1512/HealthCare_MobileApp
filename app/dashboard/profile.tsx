import { getProfile, updateProfile } from "@/services/api/auth";
import {
  Entypo,
  Feather,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Link, router, useNavigation } from "expo-router";
import { useEffect, useState } from "react";
import {
  Alert,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

type UserData = {
  _id: string;
  name: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
};
export default function Profile() {
  const [updateMode, setUpdateMode] = useState<boolean>(false);
  const [userData, setUserData] = useState<UserData | undefined>();

  useEffect(() => {
    getProfile()
      .then((res) => {
        setUserData(res.user);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleLogout = () => {
    showAlert();
  };

  const showAlert = () => {
    Alert.alert("Confirm", "Are you sure logout application ?", [
      {
        text: "Cancel",
        onPress: () => {},
        style: "cancel",
      },
      {
        text: "OK",
        onPress: () => {
          AsyncStorage.removeItem("accessToken")
            .then(() => {
              router.replace("/");
            })
            .catch((err) => {
              alert("Something is error");
            });
        },
      },
    ]);
  };

  const handleUpdateProfile = () => {
    updateProfile(userData?.name || "")
      .then((res) => {
        setUpdateMode(false);
        Alert.alert("Sucess", "Updated profile Succesfully");
      })
      .catch((err) => {
        Alert.alert("Fail", "Updated profile Unsuccessfully");
        console.log(err);
      });
  };

  const navigate = useNavigation();

  return (
    <View
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        height: "100%",
      }}
    >
      <View
        style={{
          paddingTop: 80,
          width: "100%",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Image
          style={{
            display: "flex",
          }}
          width={150}
          height={150}
          source={{
            uri: "https://www.shareicon.net/data/512x512/2016/05/24/770137_man_512x512.png",
          }}
        />
      </View>

      {!updateMode ? (
        <View
          style={{
            marginTop: 20,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: 10,
          }}
        >
          <Text
            style={{
              fontSize: 24,
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            {userData?.name}
          </Text>

          <TouchableOpacity onPress={() => setUpdateMode(true)}>
            <View>
              <Entypo name="pencil" size={28} />
            </View>
          </TouchableOpacity>
        </View>
      ) : (
        <View
          style={{
            width: "100%",
            paddingHorizontal: 20,
            display: "flex",
            flexDirection: "column",
            marginTop: 20,
            alignItems: "center",
          }}
        >
          <TextInput
            onChangeText={(value) => {
              setUserData((prev) => {
                if (prev) {
                  return {
                    ...prev,
                    name: value,
                  };
                }
                return prev;
              });
            }}
            value={userData?.name}
            placeholderTextColor={"#888"}
            style={{
              textAlign: "center",
              width: 200,
              fontSize: 20,
              height: 50,
              backgroundColor: "#fff",
              paddingHorizontal: 20,
              borderWidth: 1,
              borderColor: "#ded2b8",
              color: "rgb(58, 57, 103);",
              marginBottom: 10,
              borderRadius: 8,
            }}
          />

          <TouchableOpacity onPress={handleUpdateProfile}>
            <View
              style={{
                height: 40,
                paddingHorizontal: 40,
                paddingVertical: 6,
                backgroundColor: "#186efb",
                borderRadius: 8,
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: 8,
              }}
            >
              <Feather name="save" size={20} color={"white"} />
              <Text style={{ color: "white", fontWeight: "500" }}>Save</Text>
            </View>
          </TouchableOpacity>
        </View>
      )}

      <View style={{ marginTop: 10 }}>
        <Text style={{ fontSize: 18 }}>Email: {userData?.email}</Text>
      </View>

      <View
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",
          width: "60%",
          paddingHorizontal: 20,
          marginTop: 20,
          gap: 18,
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: 20,
          }}
        >
          <MaterialIcons name="devices" size={30} />
          <View style={{ display: "flex", flexDirection: "row", gap: 4 }}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: "bold",
              }}
            >
              2
            </Text>
            <Text
              style={{
                fontSize: 20,
                fontWeight: "bold",
              }}
            >
              Devices
            </Text>
          </View>
        </View>

        <Link href={"/changePassword"}>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 20,
              backgroundColor: "#186efb",
              paddingVertical: 6,
              paddingHorizontal: 18,
              borderRadius: 6,
            }}
          >
            <Feather name="key" size={30} color={"white"} />
            <View style={{ display: "flex", flexDirection: "row", gap: 4 }}>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "bold",
                  color: "white",
                }}
              >
                Password
              </Text>
            </View>
          </View>
        </Link>

        <TouchableOpacity onPress={handleLogout}>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 20,
              backgroundColor: "#186efb",
              paddingVertical: 6,
              paddingHorizontal: 32,
              borderRadius: 6,
            }}
          >
            <MaterialCommunityIcons name="logout" size={30} color={"white"} />
            <View style={{ display: "flex", flexDirection: "row", gap: 4 }}>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "bold",
                  color: "white",
                }}
              >
                Logout
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
