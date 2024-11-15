import { Link } from "expo-router";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import * as Notifications from "expo-notifications";
import { useState } from "react";
import { addDevice } from "@/services/api/device";

// First, set the handler that will cause the notification
// to show the alert

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

// Second, call the method

export default function AddDevice() {
  const [deviceId, setDeviceId] = useState("");
  const [deviceName, setDeviceName] = useState("");
  const [deviceType, setDeviceType] = useState("");

  // const handlePushNotify = () => {
  //   Notifications.setNotificationHandler({
  //     handleNotification: async () => ({
  //       shouldShowAlert: true,
  //       shouldPlaySound: false,
  //       shouldSetBadge: false,
  //     }),
  //   });

  //   // Second, call the method

  //   Notifications.scheduleNotificationAsync({
  //     content: {
  //       title: "Look at that notification",
  //       body: "I'm so proud of myself!",
  //     },
  //     trigger: null,
  //   });
  // };

  const handleAddDevice = () => {
    addDevice(deviceId, deviceName, deviceType)
      .then((res) => {
        alert("Create device successfully");
      })
      .catch((err) => {
        alert(`Create device unsuccessfully`);
      })
      .finally(() => {
        setDeviceId("");
        setDeviceName("");
        setDeviceType("");
      });
  };
  return (
    <View>
      <View
        style={{
          width: "100%",
          paddingHorizontal: 20,
          display: "flex",
          justifyContent: "center",
          marginTop: 50,
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            paddingVertical: 20,
          }}
        >
          <View style={{ paddingHorizontal: 20 }}>
            <Text style={{ marginLeft: 20, marginBottom: 10 }}>Device id</Text>

            <TextInput
              value={deviceId}
              onChangeText={(text) => setDeviceId(text)}
              placeholder="66f6b573592797ae3c370198"
              style={{
                width: "100%",
                fontSize: 20,
                height: 50,
                backgroundColor: "#fff",
                borderRadius: 40,
                paddingHorizontal: 20,
                borderWidth: 1,
                borderColor: "#ded2b8",
                color: "rgb(58, 57, 103);",
                marginBottom: 20,
              }}
            />
            <Text style={{ marginLeft: 20, marginBottom: 10 }}>
              Device name
            </Text>
            <TextInput
              value={deviceName}
              onChangeText={(text) => setDeviceName(text)}
              placeholder="Thiết bị cảnh báo"
              style={{
                width: "100%",
                fontSize: 20,
                height: 50,
                backgroundColor: "#fff",
                borderRadius: 40,
                paddingHorizontal: 20,
                borderWidth: 1,
                borderColor: "#ded2b8",
                color: "rgb(58, 57, 103);",
                marginBottom: 20,
              }}
            />

            <Text style={{ marginLeft: 20, marginBottom: 10 }}>
              Device Type
            </Text>
            <TextInput
              value={deviceType}
              onChangeText={(text) => setDeviceType(text)}
              placeholder="Esp-8266"
              style={{
                width: "100%",
                fontSize: 20,
                height: 50,
                backgroundColor: "#fff",
                borderRadius: 40,
                paddingHorizontal: 20,
                borderWidth: 1,
                borderColor: "#ded2b8",
                color: "rgb(58, 57, 103);",
                marginBottom: 20,
              }}
            />

            <TouchableOpacity
              onPress={handleAddDevice}
              style={{ marginTop: 30 }}
            >
              <View
                style={{
                  paddingVertical: 15,
                  paddingHorizontal: 30,
                  backgroundColor: "#186efb",
                  borderRadius: 8,
                }}
              >
                <Text style={{ color: "#fff", textAlign: "center" }}>
                  Add Device
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
