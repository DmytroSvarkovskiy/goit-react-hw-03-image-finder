import { ImageItem, Image } from './ImageGalleryItem.styled';
export const ImageGallaryItem = ({ imageLink, imageName = 'image' }) => {
  return (
    <ImageItem>
      <Image src={imageLink} alt={imageName} />
    </ImageItem>
  );
};
