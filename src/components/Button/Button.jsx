import styles from './Button.module.css'
import React from 'react'

export default function Button({changePage}) {
  return (
    <div className={styles.ButtonPosition}>
        <button className={styles.Button}
          onClick={(e) => { changePage(e)}}
        >Load more</button>
    </div>
  )
}
