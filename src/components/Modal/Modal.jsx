import styles from './Modal.module.css'
import React from 'react'

export default function Modal({ children, HandleOverlayEsc }) {
  return (
    <div className={styles.Overlay} onClick={(e) => HandleOverlayEsc(e)}
        >
        <div className={ styles.Modal}>
          { children}
        
        </div>
      </div>
  )
}
