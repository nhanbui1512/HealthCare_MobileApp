import { Entypo, Feather, MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function Profile() {
  const [updateMode, setUpdateMode] = useState(false);
  const [userName, setUserName] = useState("Nhan Bui");

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
            {userName}
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
              setUserName(value);
            }}
            value={userName}
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

          <TouchableOpacity onPress={() => setUpdateMode(false)}>
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
        <Text style={{ fontSize: 18 }}>Email : buithiennhan0345@gmail.com</Text>
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

        <TouchableOpacity>
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
        </TouchableOpacity>
      </View>
    </View>
  );
}
