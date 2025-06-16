import { useState, useEffect } from 'react';
import { fetchImages } from './services/api';
import { SearchBar } from './components/SearchBar/SearchBar';
import { ImageGallery } from './components/ImageGallery/ImageGallery';
import { Loader } from './components/Loader/Loader';
import { LoadMoreBtn } from './components/LoadMoreBtn/LoadMoreBtn';
import { ImageModal } from './components/ImageModal/ImageModal';
import type { ApiImage } from './types';

export const App = () => {
  const [query, setQuery] = useState('');
  const [images, setImages] = useState<ApiImage[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [selectedImage, setSelectedImage] = useState<ApiImage | null>(null);

  useEffect(() => {
    if (!query) return;
    setLoading(true);
    fetchImages(query, page)
      .then(newImages => {
        setImages(prev => (page === 1 ? newImages : [...prev, ...newImages]));
      })
      .finally(() => setLoading(false));
  }, [query, page]);

  return (
    <div>
      <SearchBar
        onSearch={(value) => {
          setQuery(value);
          setPage(1);
          setImages([]);
        }}
      />
      <ImageGallery images={images} onImageClick={setSelectedImage} />
      {loading && <Loader />}
      {!loading && images.length > 0 && (
        <LoadMoreBtn onClick={() => setPage(p => p + 1)} />
      )}
      {selectedImage && (
        <ImageModal image={selectedImage} onClose={() => setSelectedImage(null)} />
      )}
    </div>
  );
  
};
