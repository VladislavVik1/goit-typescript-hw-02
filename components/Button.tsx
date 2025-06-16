type Props = {
  onClick: () => void;
};

export const Button: React.FC<Props> = ({ onClick }) => (
  <button onClick={onClick}>Load More</button>
);
