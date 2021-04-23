import axiosService from "./axiosService";

export const getListUsers = () => {
  return axiosService.get(`https://randomuser.me/api?page=2&results=10`);
};
