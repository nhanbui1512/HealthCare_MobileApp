import { Entypo, Feather, MaterialIcons } from "@expo/vector-icons";
import { Image, Text, TouchableOpacity, View } from "react-native";

export default function Profile() {
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
          Nhan Bui
        </Text>

        <View>
          <Entypo name="pencil" size={28} />
        </View>
      </View>

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
