import type { ApiImage } from '../types';

type ImageGalleryProps = {
  images: ApiImage[];
};

export const ImageGallery: React.FC<ImageGalleryProps> = ({ images }) => (
  <ul>
    {images.map(({ id, webformatURL, tags }) => (
      <li key={id}>
        <img src={webformatURL} alt={tags} />
      </li>
    ))}
  </ul>
);
