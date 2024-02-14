import styles from './ImageGaleryItem.module.css'
import React, { Component } from 'react'

export default class ImageGalleryItem extends Component {
  
  
  render() {
    const { image, ImgClick} = this.props
    
    return (
      <li className={styles.ImageGalleryItem } onClick={(e) =>ImgClick(e)}>
        <img src={image.largeImageURL} alt={`Imagen from ${image.tags}` } className={styles.ImageGalleryItemImage } />
    </li>
    )
  }
}


