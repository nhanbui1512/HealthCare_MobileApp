import NotifyItem from "@/components/NotifyItem";
import { getNotifications } from "@/services/api/notifications";
import { Ionicons } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import { ScrollView, Text, View } from "react-native";

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

export default function Notification({ message: string } = { message: "" }) {
  const [notifications, setNotifications] = useState<Notify[]>();

  useEffect(() => {
    getNotifications(1, 10)
      .then((res) => {
        setNotifications(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <View>
      <View
        style={{
          paddingVertical: 20,
          borderBottomWidth: 1,
          borderColor: "#ccc",
        }}
      >
        <Text style={{ textAlign: "center", fontWeight: "bold", fontSize: 20 }}>
          Notifications
        </Text>
      </View>

      <ScrollView
        style={{
          paddingHorizontal: 20,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <View style={{ paddingTop: 10, paddingBottom: 80 }}>
          {notifications?.map((item, index) => (
            <NotifyItem key={index} data={item} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}
