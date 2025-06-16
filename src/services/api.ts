const API_KEY = 'rGEYlzYsQCd3aojwSTVw88n5302as3KtfpihGZ0iOkE';
const BASE_URL = 'https://api.unsplash.com/search/photos';

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
