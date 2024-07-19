import { createPortal } from 'react-dom';

function Modal({ children, isOpen, onClose }) {
  return createPortal(
    <>
      {isOpen && (
        <div className="w-full h-full fixed top-0 left-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50 backdrop-blur-sm">
          <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg relative">
            {children}
            <button
              onClick={onClose}
              className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-2"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </>,
    document.body
  );
}

export default Modal;
