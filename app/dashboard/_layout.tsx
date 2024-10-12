import { Stack, Tabs } from "expo-router";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { View } from "react-native";

export default function DashboardLayout() {
  return (
    <View style={{ paddingTop: 40, height: "100%" }}>
      <Tabs>
        <Tabs.Screen
          name="index"
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home-outline" color={color} size={size} />
            ),
            title: "Home",
            headerShown: false,
          }}
        />

        <Tabs.Screen
          name="notifications"
          options={{
            tabBarIcon: ({ color, size }) => (
              <AntDesign name="bells" size={size} color={color} />
            ),
            title: "Notification",
            headerShown: false,
          }}
        />

        <Tabs.Screen
          name="profile"
          options={{
            tabBarIcon: ({ color, size }) => (
              <AntDesign name="user" size={size} color={color} />
            ),
            title: "Profile",
            headerShown: false,
          }}
        />
      </Tabs>
    </View>
  );
}
