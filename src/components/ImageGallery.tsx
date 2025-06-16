import { ImageItem } from './ImageItem';
import type { ApiImage } from '../types';

type Props = {
  images: ApiImage[];
};

export const ImageGallery: React.FC<Props> = ({ images }) => (
  <ul>
    {images.map((image) => (
      <ImageItem key={image.id} image={image} />
    ))}
  </ul>
);
