import PropTypes from 'prop-types';

const ImageGalleryItem = ({smallImgURL, id}) => {
    return (
        <li className="ImageGalleryItem">
            <img className="ImageGalleryItem-image" src={smallImgURL} alt={id} />
        </li>
    );
}

ImageGalleryItem.protoType = {
    smallImgURL: PropTypes.string,
    id: PropTypes.number,
}

export default ImageGalleryItem;