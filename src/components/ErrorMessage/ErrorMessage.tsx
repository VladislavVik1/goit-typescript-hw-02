import styles from './ErrorMessage.module.css';
type Props = {
  message: string;
};

export const ErrorMessage: React.FC<Props> = ({ message }) => (
  <div style={{ color: 'red', padding: '16px', textAlign: 'center' }}>
    <p>{message}</p>
  </div>
);
