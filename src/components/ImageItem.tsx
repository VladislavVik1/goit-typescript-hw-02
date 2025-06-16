import type { ApiImage } from '../types';

type Props = {
  image: ApiImage;
};

export const ImageItem: React.FC<Props> = ({ image }) => (
  <li>
    <img src={image.webformatURL} alt={image.tags} width={300} />
  </li>
);
