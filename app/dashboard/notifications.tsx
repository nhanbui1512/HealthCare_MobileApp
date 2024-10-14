import NotifyItem from "@/components/NotifyItem";
import { Ionicons } from "@expo/vector-icons";
import { ScrollView, Text, View } from "react-native";

export default function Notification() {
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
          <NotifyItem />
          <NotifyItem />
          <NotifyItem />
          <NotifyItem />
          <NotifyItem />
          <NotifyItem />
          <NotifyItem />
          <NotifyItem />
          <NotifyItem />
          <NotifyItem />
          <NotifyItem />
          <NotifyItem />
        </View>
      </ScrollView>
    </View>
  );
}
