import styles from './Searchbar.module.css'
import React from 'react'

export default function Searchbar({ handleSearch}) {
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
