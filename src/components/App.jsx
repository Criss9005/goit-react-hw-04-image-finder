import Searchbar from "./Searchbar/Searchbar";
import ImageGallery from "./ImageGallery/ImageGallery";
import Button from "./Button/Button";
import Modal from "./Modal/Modal";
import axios from "axios";
import { Audio } from 'react-loader-spinner'


import React, { Component } from 'react'

export default class App extends Component {


  state = {
    images: [],
    err: null,
    isLoading: false,
    search: '',
    perPage: 12,
    totalPages: 0,
    page: 1,
    showModal: false,
    imgModal:''
  }

   handleSearch = (e) => { 
     e.preventDefault()
     if (this.state.search !== e.target.form[1].value) { 
       this.setState({ isLoading:true })
     }
     this.setState({ search: e.target.form[1].value, perPage: 12, page:1})
     console.log(this.state.images)
      
  }

  componentDidMount() { 
    
    axios.get(`https://pixabay.com/api/?q=${this.state.search}&page=1&key=40957682-dd6a267c102109d1db4973f80&image_type=photo&orientation=horizontal&per_page=${this.state.perPage}`)
      .then(response => {
        const data = response.data.hits
        this.setState({images: data, totalPages: Math.ceil(response.data.totalHits/12) })
        
      })
      .catch(err => { 
        this.setState({err: err})
        console.log(err)
      })
    
  }

  
  componentDidUpdate() { 

       axios.get(`https://pixabay.com/api/?q=${this.state.search}&page=1&key=40957682-dd6a267c102109d1db4973f80&image_type=photo&orientation=horizontal&per_page=${this.state.perPage}`)
        .then(response => {
          const data = response.data.hits
                    
          if (JSON.stringify(this.state.images) !== JSON.stringify(data)) { 
            console.log('diferente')
            this.setState({ images: data, totalPages: Math.ceil(response.data.totalHits / 12), isLoading:false})
            
          }
        })
        .catch(err => { 
          this.setState({err: err})
          
        })
        

  }

  changePage = (e) => { 
    let count = this.state.page
    
    if (count === this.state.totalPages) {
      alert('No se encuentran mas resultados')

    } else { 
      count++ 
      let perpageUpdate = this.state.perPage + 12
      this.setState({perPage: perpageUpdate, page: count, isLoading:true})

    }
   
  }

  ImgClick = (e) => {
    this.setState({imgModal: e.target.src, showModal:true})
    
  }

  HandleOverlayEsc = (e) => { 
    
    if (!e.target.src) { 
      this.setState({ showModal: false })

    }
   
  }

  handleonKeyDown = (e) => { 
    if (e.key === 'Escape') { 
      this.setState({showModal:false})
    } 
  }


  render() {
    const { images, search, isLoading, showModal } = this.state
   
    return (
      <div className="App">
        <Searchbar handleSearch={this.handleSearch}/>
        
        {search && (
          <ImageGallery images={images} ImgClick={this.ImgClick } />
          
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
          <Button changePage={ this.changePage} />
        )}
        {showModal &&
          <Modal HandleOverlayEsc={this.HandleOverlayEsc}
            handleonKeyDown={this.handleonKeyDown}>
            <img src={this.state.imgModal} alt=""
              onKeyDown={(e) => this.handleonKeyDown(e)}
              tabIndex={-1}
              />
          </Modal>
        }
      
    </div>
    )
  }
}
