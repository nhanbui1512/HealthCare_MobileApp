import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack initialRouteName="login">
      <Stack.Screen options={{ headerShown: false }} name="index" />
      <Stack.Screen options={{ headerShown: false }} name="dashboard" />
      <Stack.Screen options={{ headerShown: false }} name="register" />
    </Stack>
  );
}
