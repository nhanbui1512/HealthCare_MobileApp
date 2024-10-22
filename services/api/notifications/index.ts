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

export async function deleteNotification(id: string) {
  try {
    const response = await request.delete(`/notifications?notify_id=${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function readNotification(id: string) {
  try {
    const response = await request.patch(`/notifications?notify_id=${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
}
