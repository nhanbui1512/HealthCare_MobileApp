import { View, Text } from "react-native";
import React from "react";
import { AntDesign, Entypo } from "@expo/vector-icons";

type Device = {
  _id: string;
  user_id: string;
  device_name: string;
  device_type: string;
  serial_number: string;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
};

type Notify = {
  _id: string;
  user_id: string;
  alert_type: string;
  handled: boolean;
  content: string;
  createdAt: Date;
  updateAt: Date;
  __v: number;
  device_id: Device;
};

export default function NotifyItem({ data }: { data: Notify }) {
  return (
    <View
      style={{
        paddingVertical: 20,
        display: "flex",
        flexDirection: "row",
        gap: 20,
        alignItems: "center",
        width: "100%",
        borderBottomWidth: 1,
        borderColor: "#ccc",
      }}
    >
      <View
        style={{
          width: 60,
          height: 60,
          borderRadius: 100,
          backgroundColor: "#f55f51",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <AntDesign name="warning" size={24} color={"#fff"} />
      </View>

      <View style={{ width: "80%" }}>
        <Text style={{ fontSize: 18, flexWrap: "wrap", fontWeight: "500" }}>
          {data.content}
        </Text>
        <View style={{ display: "flex", flexDirection: "row", marginTop: 10 }}>
          <Entypo name="arrow-up" size={18} color={"#fac774"} />
          <Text>2 days ago</Text>
        </View>
      </View>
    </View>
  );
}
