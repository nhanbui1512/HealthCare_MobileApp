import DeviceItem from "@/components/DeviceItem";
import { getDevices } from "@/services/api/device";
import { registerService } from "@/utils/pushnotification";
import { AntDesign } from "@expo/vector-icons";
import { Link } from "expo-router";
import { useEffect, useState } from "react";
import { ScrollView, Text, View } from "react-native";

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

export default function Dashboard() {
  const [devices, setDevices] = useState<Device[]>();

  useEffect(() => {
    const token = registerService();
    console.log(token);

    getDevices()
      .then((res) => {
        setDevices(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <View
      style={{
        paddingTop: 10,
        backgroundColor: "#f7f3f6",
        height: "100%",
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingHorizontal: 20,
          borderBottomWidth: 1,
          borderColor: "#ccc",
          paddingBottom: 12,
        }}
      >
        <Text style={{ fontSize: 24, fontWeight: "600", textAlign: "center" }}>
          Your Devices
        </Text>
        <Link href={"/adddevice"}>
          <View
            style={{
              backgroundColor: "#186efb",
              borderRadius: 6,
              paddingHorizontal: 12,
              paddingVertical: 10,
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 6,
            }}
          >
            <AntDesign color={"white"} size={20} name="plus" />
            <Text style={{ color: "white", fontWeight: "600" }}>
              Add device
            </Text>
          </View>
        </Link>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false} // Ẩn thanh cuộn dọc
        style={{
          paddingTop: 20,
          paddingHorizontal: 20,
        }}
      >
        {devices?.map((item, index) => (
          <DeviceItem key={index} {...item} />
        ))}
      </ScrollView>
    </View>
  );
}
