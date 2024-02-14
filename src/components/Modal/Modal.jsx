import React, { Component } from 'react'
import styles from './Modal.module.css'


export default class Modal extends Component {

  
  render() {
    const { children, HandleOverlayEsc} = this.props
    
    return (
      <div className={styles.Overlay} onClick={(e) => HandleOverlayEsc(e)}
        >
        <div className={ styles.Modal}>
          { children}
        
        </div>
      </div>
    )
  }
}

