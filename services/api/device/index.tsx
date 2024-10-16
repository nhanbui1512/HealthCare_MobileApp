import request from "../request";

export async function getDevices() {
  try {
    const response = await request.get("/devices");
    return response.data;
  } catch (error) {
    throw error;
  }
}
