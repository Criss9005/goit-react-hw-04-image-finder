import styles from './Button.module.css'
import React, { Component } from 'react'

export default class Button extends Component {
  render() {
    const {changePage} = this.props
    return (
      <div className={styles.ButtonPosition}>
        <button className={styles.Button}
          onClick={(e) => { changePage(e)}}
        >Load more</button>
    </div>
    )
  }
}
