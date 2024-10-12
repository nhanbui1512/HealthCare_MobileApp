import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack initialRouteName="login">
      <Stack.Screen options={{ headerShown: false }} name="index" />
      <Stack.Screen options={{ headerShown: false }} name="dashboard" />
      <Stack.Screen options={{ headerShown: false }} name="register" />
      <Stack.Screen options={{ headerShown: false }} name="adddevice" />
      <Stack.Screen options={{ headerShown: false }} name="detailDevice" />
    </Stack>
  );
}
