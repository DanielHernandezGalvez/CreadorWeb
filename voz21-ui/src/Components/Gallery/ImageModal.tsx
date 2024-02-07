import React from "react";
interface ImageModalProps {
    imgUrl: string; // Especifica el tipo de imgUrl como string
    closeModal: () => void;
  }
const ImageModal: React.FC<ImageModalProps> = ({ imgUrl, closeModal }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="modal z-50">
        <div className="modal-content  p-10 w-screen bg-white rounded shadow-lg flex flex-col items-center justify-center">
          <img src={imgUrl} alt="img" className="rounded-lg mb-5" />
          <button className="btn-modal" onClick={closeModal}>
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageModal;