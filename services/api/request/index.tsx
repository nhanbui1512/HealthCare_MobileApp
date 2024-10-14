import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

// Tạo một instance của axios
const request = axios.create({
  baseURL: "https://iot-deployment.onrender.com",
  headers: {
    Accept: "application/json, text/plain, */*",
    "Content-Type": "application/json",
  },
});

// Hàm lấy token từ AsyncStorage
const getToken = async () => {
  try {
    const token = await AsyncStorage.getItem("accessToken");
    return token;
  } catch (error) {
    console.log("Lấy token thất bại", error);
  }
};

// Sử dụng Axios Interceptor để thêm token vào headers trước mỗi request
request.interceptors.request.use(
  async (config) => {
    const token = await getToken(); // Lấy token từ AsyncStorage
    if (token) {
      config.headers.Authorization = `Bearer ${token}`; // Gắn token vào header Authorization
    }
    return config;
  },
  (error) => {
    // Xử lý lỗi khi cấu hình request
    return Promise.reject(error);
  }
);

export default request;
