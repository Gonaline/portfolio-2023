import axios from 'axios';

export const Project3Service = {
  getAllCategories: async () => {
    return axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/stickers-shop/categories`
    );
  },
};
