import { callAPI } from "../helper";
export const getlist = () => {
  return callAPI(null, "GET");
};
