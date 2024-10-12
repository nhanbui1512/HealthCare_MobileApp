import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";
import { Link } from "expo-router";

export default function DeviceItem() {
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
              backgroundColor: "#ccc",
              borderWidth: 1,
              borderRadius: 100,
            }}
          >
            <MaterialCommunityIcons name="devices" size={24} color="black" />
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
              <Text style={{ fontWeight: "600", fontSize: 18 }}>John Doe</Text>
              <Text>Arduino</Text>
            </View>
            <View style={{ paddingHorizontal: 8 }}>
              <AntDesign name="right" size={24} color="black" />
            </View>
          </View>
        </View>
      </View>
    </Link>
  );
}
