import axios from "axios";

export function callAPI(endpoint, method = "GET", body) {
  return axios({
    method: method,
    url: `https://randomuser.me/api?page=1&results=10`,
    data: body,
  });
}
