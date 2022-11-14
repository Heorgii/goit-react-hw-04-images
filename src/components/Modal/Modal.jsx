import { useEffect } from "react";

const Modal = ({ onClose, pic }) => {

    useEffect(() => {
        const handleKeyDown = e => {
            if (e.code === 'Escape') {
                return onClose();
            }
        }

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        }
    });

    return (
        <div className="Overlay" >
            <div className="Modal">
                <img src={pic} alt="" />
            </div>
        </div>
    );
}


export default Modal;