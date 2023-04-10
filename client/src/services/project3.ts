import axios from 'axios';

export const Project3Service = {
  getAllCategories: async () => {
    return axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/stickers-shop/categories`
    );
  },

  getProductsByCategory: async (categoryConvertName: string) => {
    const data = await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/stickers-shop/category/${categoryConvertName}`
    );
    return data;
  },

  getProductById: async (id: string) => {
    const data = await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/stickers-shop/product/${id}`
    );
    return data;
  },
};
