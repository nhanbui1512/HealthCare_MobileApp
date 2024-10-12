import DeviceItem from "@/components/DeviceItem";
import { AntDesign } from "@expo/vector-icons";
import { Link } from "expo-router";
import { ScrollView, Text, View } from "react-native";

export default function Dashboard() {
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
        <DeviceItem />
        <DeviceItem />
        <DeviceItem />
        <DeviceItem />
        <DeviceItem />
        <DeviceItem />
        <DeviceItem />
        <DeviceItem />
        <DeviceItem />
        <DeviceItem />
        <DeviceItem />
      </ScrollView>
    </View>
  );
}
