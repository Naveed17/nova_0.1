import http from "./http";

export const getAllProducts = async () => {
  try {
    const { data: response } = await http.get(`/products`);
    return response;
  } catch (err) {
    return err;
  }
};
export const getAllCategories = async () => {
  try {
    const { data: response } = await http.get(`/products/categories`);
    return response;
  } catch (err) {
    return err;
  }
};
