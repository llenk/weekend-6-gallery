import React, { Component } from 'react';

class GalleryList extends Component {
  render(props) {
    return (
      <div className="GalleryList">
        {this.props.gallery.map(gal=><img key={gal.id} src={gal.path} alt={gal.description}/>)}
      </div>
    );
  }
}

export default GalleryList;
