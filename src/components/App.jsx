import Searchbar from "./Searchbar/Searchbar";
import ImageGallery from "./ImageGallery/ImageGallery";
import Button from "./Button/Button";
import Modal from "./Modal/Modal";
import axios from "axios";
import { Audio } from 'react-loader-spinner'
import React, { useEffect, useState } from 'react'

export default function App() {

  const [images, setImages] = useState([])
  const [err, setErr] = useState(null)
  const [isLoading, setIsloading] = useState(false)
  const [search, setSearch] = useState('')
  const [perPage, setperPage] = useState(12)
  const [totalPages, setTotalPages] = useState(0)
  const [page, setPage] = useState(1)
  const [showModal, setShowModal] = useState(false)
  const [imgModal, setImgModal] = useState('')

  useEffect(() => { 
       
    axios.get(`https://pixabay.com/api/?q=${search}&page=1&key=40957682-dd6a267c102109d1db4973f80&image_type=photo&orientation=horizontal&per_page=${perPage}`)
      .then(response => {
        const data = response.data.hits
        setImages(data)
        setTotalPages(Math.ceil(response.data.totalHits/12))
      })
      .catch(e => { 
        setErr(e)
        console.log(err)
      })
    
  
  }, [search, perPage, err])

  useEffect(() => { 
 axios.get(`https://pixabay.com/api/?q=${search}&page=1&key=40957682-dd6a267c102109d1db4973f80&image_type=photo&orientation=horizontal&per_page=${perPage}`)
        .then(response => {
          const data = response.data.hits
                    
          if (JSON.stringify(images) !== JSON.stringify(data)) { 
            console.log('diferente')
            setImages(data)
            setTotalPages(Math.ceil(response.data.totalHits / 12))
            setIsloading(false)
                        
          }
        })
        .catch(err => { 
          setErr(err)
          
        })
  },[images, perPage, isLoading, search])




  function handleSearch(e) {
    e.preventDefault()
     if (search !== e.target.form[1].value) { 
       setIsloading(true)
    }
    setperPage(12)
    setPage(1)
    setSearch(e.target.form[1].value)
     
  }

  function changePage(e) {
    let count = page
    
    if (count === totalPages) {
      alert('No se encuentran mas resultados')

    } else { 
      count++ 
      setperPage(perPage+12)
      setPage(count)
      setIsloading(true)
    }
   
  }
    
  function ImgClick(e) {
    setImgModal(e.target.src)
    setShowModal(true)
  }
    
  function handleonKeyDown(e) {
    if (e.key === 'Escape') { 
        this.setState({showModal:false})
      } 
  }

  function HandleOverlayEsc(e) {
    if (!e.target.src) {
      setShowModal(false)
    }
  }
   
  
  

  return (
    <div className="App">
        <Searchbar handleSearch={handleSearch}/>
        
        {search && (
          <ImageGallery images={images} ImgClick={ImgClick } />
          
          )}
        {isLoading && <Audio
          height="80"
          width="80"
          radius="9"
          color="#3f51b5"
          ariaLabel="loading"
          wrapperStyle
          wrapperClass
          justifyContent='center'
        />}

        {search && (
          <Button changePage={ changePage} />
        )}
        {showModal &&
          <Modal HandleOverlayEsc={HandleOverlayEsc}
            handleonKeyDown={handleonKeyDown}>
            <img src={imgModal} alt=""
              onKeyDown={(e) => handleonKeyDown(e)}
              tabIndex={-1}
              />
          </Modal>
        }
      
    </div>
  )
}
