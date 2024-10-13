import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";
import { Link } from "expo-router";

interface Device {
  name: string;
  devicename: string;
  isActive?: boolean; // Thuộc tính tùy chọn
}
export default function DeviceItem(device: Device) {
  return (
    <Link href={"/detailDevice"}>
      <View
        style={{
          padding: 10,
          width: "100%",
          marginBottom: 12,
          ...styles.box,
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 20,
            alignItems: "center",
          }}
        >
          <View
            style={{
              width: 60,
              height: 60,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#fff",
              borderWidth: 1,
              borderRadius: 100,
              borderColor: "#ccc",
            }}
          >
            <Image
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: 100,
              }}
              source={{
                uri: "https://cdn-icons-png.flaticon.com/512/3567/3567018.png",
              }}
            />
          </View>

          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              flex: 1,
              alignItems: "center",
            }}
          >
            <View>
              <Text style={{ fontWeight: "600", fontSize: 18 }}>
                {device.name}
              </Text>
              <Text>{device.devicename}</Text>
            </View>
            <View style={{ paddingHorizontal: 8 }}>
              <AntDesign name="right" size={24} />
            </View>
          </View>
        </View>
      </View>
    </Link>
  );
}
