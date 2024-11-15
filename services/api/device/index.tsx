import request from "../request";

export async function getDevices() {
  try {
    const response = await request.get("/devices");
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function addDevice(
  deviceId: string,
  deviceName: string,
  deviceType: string
) {
  try {
    const response = await request.post(`/devices`, {
      deviceName: deviceName,
      deviceType: deviceType,
      deviceId: deviceId,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}
