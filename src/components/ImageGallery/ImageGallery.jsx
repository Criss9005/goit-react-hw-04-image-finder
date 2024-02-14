import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem'
import styles from './ImageGallery.module.css'

const ImageGallery = ({ images, ImgClick}) => { 
  return (
    <ul className={ styles.ImageGallery}>
      {images.map(image =>{ 
        return <ImageGalleryItem image={image} ImgClick={ImgClick } key={ image.id} />
      })}
    </ul>
  )
}

export default ImageGallery

