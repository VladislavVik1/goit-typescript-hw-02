import Modal from 'react-modal';
import type { ApiImage } from '../../types';

type Props = {
  image: ApiImage;
  onClose: () => void;
};

Modal.setAppElement('#root'); // Важливо для доступності

export const ImageModal: React.FC<Props> = ({ image, onClose }) => {
  return (
    <Modal
      isOpen={!!image}
      onRequestClose={onClose}
      contentLabel="Image Modal"
      style={{
        content: {
          maxWidth: '80%',
          margin: 'auto',
          padding: '0',
          textAlign: 'center',
        },
      }}
    >
      <img src={image.largeImageURL} alt={image.tags} style={{ width: '100%' }} />
      <button onClick={onClose}>Close</button>
    </Modal>
  );
};
