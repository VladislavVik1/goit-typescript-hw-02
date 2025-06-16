import { useState, useEffect } from 'react';
import { SearchForm } from './components/SearchForm';
import { ImageGallery } from './components/ImageGallery';
import { fetchImages } from './services/api';
import type { ApiImage } from './types';

export const App = () => {
  const [query, setQuery] = useState<string>('');
  const [images, setImages] = useState<ApiImage[]>([]);

  useEffect(() => {
    if (!query) return;
    fetchImages(query).then(setImages);
  }, [query]);

  return (
    <div>
      <SearchForm onSearch={setQuery} />
      <ImageGallery images={images} />
    </div>
  );
};
