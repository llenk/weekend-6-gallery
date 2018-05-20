import React, { Component } from 'react';
import GalleryCard from '../GalleryCard/GalleryCard';

import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';

class GalleryList extends Component {
  render(props) {
    return (
      <MuiThemeProvider theme={this.props.myTheme}>
      <div className="GalleryList">
        {this.props.gallery.map(gal=><GalleryCard key={gal.id} item={gal} myTheme={this.props.myTheme} handleLike={this.props.handleLike}/>)}
      </div>
      </MuiThemeProvider>
    );
  }
}

export default GalleryList;
