import styles from './ImageGaleryItem.module.css'
import React from 'react'

export default function ImageGalleryItem({ image, ImgClick}) {
  return (
    <li className={styles.ImageGalleryItem } onClick={(e) =>ImgClick(e)}>
        <img src={image.largeImageURL} alt={`Imagen from ${image.tags}` } className={styles.ImageGalleryItemImage } />
    </li>
  )
}