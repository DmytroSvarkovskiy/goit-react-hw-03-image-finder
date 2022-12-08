import { ImageGallaryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { GalleryList } from './ImageGallery.styled';
export const ImageGallery = ({ searchResults }) => {
  return (
    <GalleryList>
      {searchResults.map(element => (
        <ImageGallaryItem
          key={element.id}
          imageLink={element.webformatURL}
          imageName={element.tags}
        />
      ))}
    </GalleryList>
  );
};
