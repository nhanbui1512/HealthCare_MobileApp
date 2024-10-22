import { View, Text, Button, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { AntDesign, Entypo, Feather } from "@expo/vector-icons";
import Modal from "react-native-modal";
import {
  deleteNotification,
  readNotification,
} from "@/services/api/notifications";
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

export default function NotifyItem({
  data,
  onDeleted,
  onReaded,
}: {
  data: Notify;
  onDeleted: Function;
  onReaded: Function;
}) {
  const [deletePopup, setDeletePopup] = useState<boolean>(false);

  const handleDelete = () => {
    deleteNotification(data._id)
      .then((res) => {
        onDeleted(data._id);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setDeletePopup(false);
      });
  };

  const handleReadNotify = () => {
    readNotification(data._id)
      .then((res) => {
        onReaded(data._id);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <TouchableOpacity onPress={handleReadNotify}>
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
          borderRadius: 20,
          paddingHorizontal: 20,
          backgroundColor: data.handled ? "#fff" : "#E9F2FF",
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

        <View style={{ flex: 1 }}>
          <View>
            <Text style={{ fontSize: 18, flexWrap: "wrap", fontWeight: "500" }}>
              {data.content}
            </Text>
            <View
              style={{ display: "flex", flexDirection: "row", marginTop: 10 }}
            >
              <Entypo name="arrow-up" size={18} color={"#fac774"} />
              <Text>2 days ago</Text>
            </View>
          </View>
        </View>
        <TouchableOpacity
          onPress={() => setDeletePopup(true)}
          style={{ marginRight: 10 }}
        >
          <Feather name="trash" size={24} color="black" />
        </TouchableOpacity>

        <Modal isVisible={deletePopup}>
          <View
            style={{
              flex: 1,
              height: "100%",
              display: "flex",
              alignItems: "center",
            }}
          >
            <View
              style={{
                width: "90%",
                marginVertical: "auto",
                backgroundColor: "#fff",
                padding: 24,
                borderRadius: 10,
              }}
            >
              <Text
                style={{ fontSize: 24, textAlign: "center", fontWeight: 600 }}
              >
                Delete this notification ?
              </Text>

              <Button onPress={() => setDeletePopup(false)} title="Cancle" />
              <Button onPress={handleDelete} title="Yes" />
            </View>
          </View>
        </Modal>
      </View>
    </TouchableOpacity>
  );
}
