export default function Modal({ isOpen, onClose, children }) {

    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>

            <div
                className="modal-content"
                onClick={(e) => e.stopPropagation()}
            >
                {children}

                <button className="btn-pers w-100" onClick={onClose}>
                    Chiudi
                </button>

            </div>

        </div>
    );
}