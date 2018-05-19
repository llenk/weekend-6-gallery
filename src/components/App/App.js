import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import GalleryList from '../GalleryList/GalleryList';

class App extends Component {
  constructor() {
    super();
    this.state = {
      pics: [],
    };
    this.getGallery();
  }

  getGallery() {
    axios({
      method: 'GET',
      url: '/gallery',
    }).then((response) => {
      this.setState({
        pics: response.data,
      });
    }).catch((error) => {
        console.log(error);
    });
  }

  render() {
    console.log(this.state.pics);
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of my life</h1>
        </header>
        <br/>
        <GalleryList gallery={this.state.pics}/>
      </div>
    );
  }
}

export default App;
