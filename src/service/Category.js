import axiosClient from "./axiosClient";

const CategoryApi = {
  async getAll() {
    const response = await axiosClient("/category", {
      "content-type": "application/json",
      data: {},
    });

    return response;
  },

  get(id) {
    const url = `/category/${id}/`;
    return axiosClient.get(url);
  },

  add(data) {
    const url = `/category/`;
    return axiosClient.post(url, data);
  },

  update(data) {
    const url = `/category/${data.id}/`;
    return axiosClient.patch(url, data);
  },

  remove(id) {
    const url = `/category/${id}/`;
    return axiosClient.delete(url);
  },
};
export default CategoryApi;
