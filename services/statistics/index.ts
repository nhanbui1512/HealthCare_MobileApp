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

type Data = {
  deviceId: string;
  date: string;
  month: number;
  year: number;
};
export async function getDataInMonth(data: Data) {
  try {
    const response = await request.get(
      `/statistics?deviceId=${data.deviceId}&type=average&year=${data.year}&month=${data.month}&date=${data.date}`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function getLatestOxygen(id: string) {
  try {
    const response = await request.get(
      `/heart-rates?deviceId=${id}&type=latest`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
}
