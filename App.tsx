import { useState, useEffect } from 'react';
import { fetchImages } from './services/api';
import { SearchBar } from './components/SearchBar';
import { ImageGallery } from './components/ImageGallery';
import { Loader } from './components/Loader';
import { Button } from './components/Button';
import type { ApiImage } from './types';

export const App = () => {
  const [query, setQuery] = useState('');
  const [images, setImages] = useState<ApiImage[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!query) return;

    setLoading(true);
    fetchImages(query, page)
      .then((newImages) => {
        setImages((prev) => (page === 1 ? newImages : [...prev, ...newImages]));
      })
      .finally(() => setLoading(false));
  }, [query, page]);

  const handleSearch = (newQuery: string) => {
    setQuery(newQuery);
    setPage(1);
  };

  const loadMore = () => setPage((prev) => prev + 1);

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <ImageGallery images={images} />
      {loading && <Loader />}
      {!loading && images.length > 0 && <Button onClick={loadMore} />}
    </div>
  );
};
