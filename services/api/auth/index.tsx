import request from "../request";

interface formLogin {
  email: string;
  password: string;
}

export async function Login(data: formLogin) {
  try {
    const response = await request.post("/auth/login", {
      email: data.email,
      password: data.password,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function getProfile() {
  try {
    const response = await request.get("/auth/me");
    return response.data;
  } catch (error) {
    throw error;
  }
}

type FormChangePass = {
  oldPassword: string;
  newPassword: string;
};

export async function updatePassword(data: FormChangePass) {
  try {
    const response = await request.put("/auth/password", {
      oldPassword: data.oldPassword,
      newPassword: data.newPassword,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}
