import styles from './ImageCard.module.css';
import type { ApiImage } from '../../types';

type Props = {
  image: ApiImage;
  onClick: () => void;
};

export const ImageCard: React.FC<Props> = ({ image, onClick }) => (
  <li onClick={onClick}>
    <img src={image.webformatURL} alt={image.tags} />
  </li>
);
