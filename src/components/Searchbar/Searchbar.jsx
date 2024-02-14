import styles from './Searchbar.module.css'
import React, { Component } from 'react'

export default class Searchbar extends Component {
  render() {
    const { handleSearch} = this.props
    return (
      <header className={styles.searchbar }>
      <form className={ styles.SearchForm}>
          <button 
            className={styles.SearchFormButton}
            onClick={(e)=> handleSearch(e)}
          >
            <span className={ styles.SearchFormButtonLabel}>Search</span>
            </button>

            <input
            className={ styles.SearchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            
          />
        </form>
    </header>  
    )
  }
}
