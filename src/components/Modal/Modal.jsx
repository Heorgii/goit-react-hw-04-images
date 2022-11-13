import { useEffect } from "react";

const Modal = ({ onClose, pic }) => {

    useEffect(() => {
        const handleKeyDown = e => {
            if (e.code === 'Escape') {
                return onClose();
            }
        }

        const handleClickClose = e => {
            if (e.target.className.includes('Overlay')) {
                return onClose();
            }
        }

        window.addEventListener('keydown', handleKeyDown);
        window.addEventListener('click', handleClickClose);
        
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            window.removeEventListener('click', handleClickClose);
        }
    });

    return (
        <div className="Overlay">
            <div className="Modal">
                <img src={pic} alt="" />
            </div>
        </div>
    );
}


export default Modal;