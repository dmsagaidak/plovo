import axios from "axios";

const axiosApi = axios.create({
  baseURL: 'https://dmsagaidak-ccab4-default-rtdb.firebaseio.com/'
});

export default axiosApi;