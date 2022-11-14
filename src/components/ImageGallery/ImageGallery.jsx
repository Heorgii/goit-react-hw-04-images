import PropTypes from 'prop-types';
import { nanoid } from 'nanoid'

import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem'
import Modal from 'components/Modal/Modal';
import { useState } from 'react';

const ImageGallery = ({ images }) => {
    const [showModal, setShowModal] = useState(false);
    const [bigPic, setBigPic] = useState(null);

    const handleModal = (e) => {
        let picture = images.filter(obj => {
            return obj.id === parseInt(e.target.alt);
        });
        setBigPic(picture[0].largeImageURL);
        toggleModal();
    }

    const toggleModal = () => {
        setShowModal(prevShowModal => !prevShowModal);
    };

    return (
        <>
            <ul className="ImageGallery" onClick={handleModal} >
                {images.map(img => {
                    return (
                        <ImageGalleryItem
                            // onClick={handleModal}
                            key={nanoid()}
                            smallImgURL={img.webformatURL}
                            id={img.id}
                        />
                    );
                })}
            </ul>
            {showModal && bigPic && (
                <Modal onClose={toggleModal} pic={bigPic} />
            )}
        </>
    );
}

ImageGallery.propTypes = {
    images: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            largeImageURL: PropTypes.string.isRequired,
            webformatURL: PropTypes.string.isRequired,
        })
    ),
};

export default ImageGallery;