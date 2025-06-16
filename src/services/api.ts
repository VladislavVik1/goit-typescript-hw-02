import axios from 'axios';
import type { ApiImage } from '../types';

const API_KEY = 'YOUR_PIXABAY_API_KEY';
const BASE_URL = 'https://pixabay.com/api/';

export const fetchImages = async (
  query: string,
  page: number
): Promise<ApiImage[]> => {
  const response = await axios.get(BASE_URL, {
    params: {
      key: API_KEY,
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      per_page: 12,
      page,
    },
  });

  return response.data.hits;
};
