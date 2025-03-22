import Modal from "react-modal";
import styles from "./ImageModal.module.css";

const ImageModal = ({ image, onClose }) => {
  return (
    <Modal isOpen={!!image} onRequestClose={onClose} className={styles.modal} overlayClassName={styles.overlay}>
      <img src={image.urls.regular} alt={image.alt_description} />
      <p>{image.description || "No description available"}</p>
      <button onClick={onClose}>Close</button>
    </Modal>
  );
};

export default ImageModal;
