import request from "../request";

export async function getNotifications(page: number, perPage: number) {
  try {
    const response = await request.get(
      `/notifications?page=${page}&per_page=${perPage}`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
}
