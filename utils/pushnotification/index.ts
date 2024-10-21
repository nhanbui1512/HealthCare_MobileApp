import * as Notifications from "expo-notifications";
import Constants from "expo-constants";

import { getExpoPushTokenAsync } from "expo-notifications";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

export async function registerService() {
  Notifications.setNotificationChannelAsync("default", {
    name: "default",
    importance: Notifications.AndroidImportance.MAX,
    vibrationPattern: [0, 250, 250, 250],
    lightColor: "#FF231F7C",
  });

  const { status: existingStatus } = await Notifications.getPermissionsAsync();
  let finalStatus = existingStatus;

  if (existingStatus !== "granted") {
    const { status } = await Notifications.requestPermissionsAsync();
    finalStatus = status;
  }

  if (finalStatus !== "granted") return;

  const projectId = "8350e517-f47b-4400-a328-80d4a676e713";

  if (!projectId) return;

  const token = await Notifications.getExpoPushTokenAsync({
    projectId,
  });
  return token.data;
}

// export async function getPushToken() {
//   const { data: token } = await getExpoPushTokenAsync({
//     projectId: "8350e517-f47b-4400-a328-80d4a676e713",
//   });
//   console.log(token);
//   return token;
// }
