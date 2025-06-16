import { ImageCard } from '../ImageCard/ImageCard';
import type { ApiImage } from '../../types';

type Props = {
  images: ApiImage[];
  onImageClick: (image: ApiImage) => void;
};

export const ImageGallery: React.FC<Props> = ({ images, onImageClick }) => (
  <ul>
    {images.map(image => (
      <ImageCard key={image.id} image={image} onClick={() => onImageClick(image)} />
    ))}
  </ul>
);
