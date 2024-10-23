import NotifyItem from "@/components/NotifyItem";
import { getNotifications } from "@/services/api/notifications";
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
  fromNowOn: string;
  createdAt: Date;
  updateAt: Date;
  __v: number;
  device_id: Device;
};

export default function Notification({ message: string } = { message: "" }) {
  const [notifications, setNotifications] = useState<Notify[]>([]);

  useEffect(() => {
    getNotifications(1, 10)
      .then((res) => {
        setNotifications(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleDeleted = (id: string) => {
    setNotifications((prevNotifications) => {
      // Lọc ra các thông báo không có id trùng với id được truyền vào
      const newState: Notify[] = prevNotifications.filter(
        (notification) => notification._id !== id
      );
      return newState; // Trả về mảng mới
    });
  };

  const handleReaded = (id: string) => {
    setNotifications((prev) => {
      const newState: Notify[] = [...prev];
      const notify = newState.find((item) => item._id === id);
      if (notify) notify.handled = true;
      return newState;
    });
  };

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
        <View
          style={{
            paddingTop: 10,
            paddingBottom: 80,
            display: "flex",
            flexDirection: "column",
            gap: 10,
          }}
        >
          {notifications?.map((item, index) => (
            <NotifyItem
              onReaded={handleReaded}
              onDeleted={handleDeleted}
              key={index}
              data={item}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}
