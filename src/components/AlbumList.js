// Import libs for making a component
// React import is not destructured because it is directly used by Babel to
// convert JSX to raw Javascript.
import React, { Component } from 'react';
import { ScrollView } from 'react-native';
// Library for async calls over HTTP to return a Promise
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

// Make the component
// Class component
class AlbumList extends Component {
  // 'State': object used to record and respond to user-triggered events.
  // Only used with class based components.
  // Initial component state
  state = { albums: [] };

  // Lifecycle method: triggers when component is about to be rendered
  componentWillMount() {
    // state is always modified through setState not directly
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      .then(response => this.setState({ albums: response.data }));
  }

  renderAlbums() {
    return this.state.albums.map(album =>
      // {} to reference Javascript from within JSX
      // Key is recommended by React for performance to identify elements
      // Passing 'album' object as a prop to child AlbumDetail
      <AlbumDetail key={album.title} album={album} />
    );
  }

  // Class based components MUST implement render() method that returns JSX.
  // Render is called again when request handler calls 'setState'
  render() {
    return (
      // JSX syntax
      <ScrollView>
        {this.renderAlbums()}
      </ScrollView>
    );
  }
} // Classes don't require semi colon.

// Make the component available to other parts of the app
export default AlbumList;
