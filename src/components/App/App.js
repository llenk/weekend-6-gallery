import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import GalleryList from '../GalleryList/GalleryList';

import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { createMuiTheme } from '@material-ui/core/styles';
import teal300 from '@material-ui/core/colors/teal';
import pink from '@material-ui/core/colors/pink';
import deepPurpleA400 from '@material-ui/core/colors/deepPurple';

const myTheme = createMuiTheme({
  palette: {
    primary: deepPurpleA400,
    secondary: pink,
    error: teal300,
    contrastThreshold: 3,
    tonalOffset: 0.2,
  }
});


class App extends Component {
  constructor() {
    super();
    this.state = {
      pics: [],
    };
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

  handleLike = (id) => (event) => {
    axios({
      method: 'PUT',
      url: '/gallery/like/' + id,
      // params: {
      //     id: this.props.item.id,
      // },
    }).then((response) => {
      this.getGallery();
    }).catch((error) => {
      console.log(error);
    });
  };

  componentDidMount = () => {
    this.getGallery();
  }

  render() {
    console.log(this.state.pics);
    return (
      <MuiThemeProvider theme={myTheme}>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Gallery of my life</h1>
          </header>
          <br />
          <GalleryList gallery={this.state.pics} myTheme={myTheme} handleLike={this.handleLike}/>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
