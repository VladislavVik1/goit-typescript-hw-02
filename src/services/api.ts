

import axios from 'axios';
import type { ApiImage } from '../types';

const API_KEY = '49353739-de52a4a64f2d40a4c6a535a2b';
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
