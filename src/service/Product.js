import axiosClient from "./axiosClient";

const ProductApi = {
  async getAll() {
    const response = await axiosClient("/product", {
      "content-type": "application/json",
      data: {},
    });

    return response;
  },

  get(id) {
    const url = `/product/${id}/`;
    return axiosClient.get(url);
  },

  add(data) {
    const url = `/product/`;
    return axiosClient.post(url, data);
  },

  update(data) {
    const url = `/product/${data.id}/`;
    return axiosClient.patch(url, data);
  },

  remove(id) {
    const url = `/product/${id}/`;
    return axiosClient.delete(url);
  },
};
export default ProductApi;
