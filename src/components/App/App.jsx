import axios from 'axios';

import { Searchbar } from '../Searchbar/Searchbar';
import { Button } from '../Button/Button';
import { ImageGallery } from '../ImageGallery/ImageGallery';
import { Wrapper } from './App.styled';
import { Component } from 'react';
import { GlobalStyle } from 'components/GlobalStyle';
import { Loader } from 'components/Loader/Loader';
import { Modal } from 'components/Modal/Modal';

export class App extends Component {
  state = {
    modalVisible: false,
    totalResult: null,
    searchResults: [],
    currentPage: 1,
    searchName: 'pig',
    loaderVisible: false,
  };

  getImage = async () => {
    const apiSearch = `https://pixabay.com/api/?q=${this.state.searchName}&page=${this.state.currentPage}&key=30629726-597c78df0089c177162f75c58&image_type=photo&orientation=horizontal&per_page=12`;
    try {
      const response = await axios.get(apiSearch);
      this.setState({ searchResults: response.data.hits });
    } catch (error) {
      console.error(error);
    }
  };
  componentDidMount(prevProps, prevState) {
    if (prevState !== this.state) {
      this.getImage();
    }
  }

  render() {
    return (
      <Wrapper>
        <GlobalStyle />
        <Searchbar />
        {this.state.modalVisible && <Modal />}
        <ImageGallery searchResults={this.state.searchResults}></ImageGallery>
        {this.state.loaderVisible && <Loader />}
        {this.state.searchResults.length > 12 && <Button />}
      </Wrapper>
    );
  }
}
