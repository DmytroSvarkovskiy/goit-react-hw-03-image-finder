import { Overlay, ModalWindow } from './Modal.styled';
export const Modal = ({ dataImage, closeModal }) => {
  return (
    <Overlay onClick={closeModal}>
      <ModalWindow>
        <img src={dataImage.src} alt={dataImage.alt} />
      </ModalWindow>
    </Overlay>
  );
};
