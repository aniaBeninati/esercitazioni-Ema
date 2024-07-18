/*createPortal (hook) è una funzione che permette di rendere un componente figlio in un nodo DOM diverso dall'albero DOM del genitore.*/
import { createPortal } from "react-dom";

function Modal({ children, isOpen, onClose }) {
  return createPortal(
    <>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden w-full max-w-md">
            <div className="p-4">
              {children}
            </div>
          </div>
        </div>
      )}
    </>,
    document.body
  );
}

export default Modal;
