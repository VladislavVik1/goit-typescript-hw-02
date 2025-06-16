import styles from './LoadMoreBtn.module.css';
type Props = {
  onClick: () => void;
};

export const LoadMoreBtn: React.FC<Props> = ({ onClick }) => (
  <button onClick={onClick}>Load More</button>
);
