import { Overlay, ModalWindow } from './Modal.styled';
import { createPortal } from 'react-dom';
const modalRoot = document.querySelector('#modal-root');
export const Modal = ({ dataImage, closeModal }) => {
  return createPortal(
    <Overlay onClick={closeModal}>
      <ModalWindow>
        <img src={dataImage.src} alt={dataImage.alt} />
      </ModalWindow>
    </Overlay>,
    modalRoot
  );
};
