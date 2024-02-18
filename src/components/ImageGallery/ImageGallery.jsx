import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem'
import styles from './ImageGallery.module.css'

export default function ImageGallery({ images, ImgClick}) {
  return (
    <ul className={ styles.ImageGallery}>
      {images.map(image =>{ 
        return <ImageGalleryItem image={image} ImgClick={ImgClick } key={ image.id} />
      })}
    </ul>
  )
}
