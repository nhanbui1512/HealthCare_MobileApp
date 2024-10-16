import request from "../api/request";

export async function getDataInWeek(date: string, deviceId: string) {
  try {
    const response = await request.get(
      `/statistics?deviceId=${deviceId}&date=${date}&type=average`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
}
