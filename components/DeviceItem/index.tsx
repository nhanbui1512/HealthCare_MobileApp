import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import React, { useEffect } from "react";
import { Image, Text, View } from "react-native";
import styles from "./styles";
import { Link } from "expo-router";

type User = {
  _id: string;
  name: string;
  email: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
};

type Device = {
  _id: string;
  device_name: string;
  device_type: string;
  serial_number: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
  user: User;
};

export default function DeviceItem(data: Device) {
  return (
    <Link href={`/detailDevice/${data._id}`}>
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
                uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSafg_7DOjlEhViRQT7Dn0BX7U9IJQzA4AHbw-F_AFZCwnZtD9sMAKo-Tkb09FX3ZnuPFE&usqp=CAU",
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
                {data.device_name}
              </Text>
              <Text>{data.device_type}</Text>
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
