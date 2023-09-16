import { axiosClient } from "../utils/axiosClient";
const url = "quotes";
export const quoteApi = {
  getAllByAuthSlug(authSlug) {
    return axiosClient.get(`${url}?authslug=${authSlug}`);
  },

  getRandom() {
    return axiosClient.get(`${url}/random`);
  },
};

export default quoteApi;
