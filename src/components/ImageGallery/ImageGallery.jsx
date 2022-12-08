import { ImageGallaryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { GalleryList } from './ImageGallery.styled';
export const ImageGallery = ({ searchResults, lookBigImg }) => {
  return (
    <GalleryList>
      {searchResults.map(element => (
        <ImageGallaryItem
          key={element.id}
          id={element.id}
          imageLink={element.webformatURL}
          imageName={element.tags}
          onImageClick={lookBigImg}
        />
      ))}
    </GalleryList>
  );
};
