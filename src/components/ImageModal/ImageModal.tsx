import styles from './ImageModal.module.css';
import type { ApiImage } from '../../types';

type Props = {
  image: ApiImage;
  onClose: () => void;
};

export const ImageModal: React.FC<Props> = ({ image, onClose }) => (
  <div className="modal" onClick={onClose}>
    <img src={image.largeImageURL} alt={image.tags} />
  </div>
);
