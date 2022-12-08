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
    currentPage: 2,
    searchName: 'top',
    loaderVisible: false,
  };
  // fetch = () => {
  //   const url = `https://pixabay.com/api/?q=${this.state.searchName}&page=${this.state.currentPage}&key=30629726-597c78df0089c177162f75c58&image_type=photo&orientation=horizontal&per_page=12`;
  //   fetch(url)
  //     .then(res => res.json())
  //     .then(console.log);
  // };
  getImage = async () => {
    const apiSearch = `https://pixabay.com/api/?q=${this.state.searchName}&page=${this.state.currentPage}&key=30629726-597c78df0089c177162f75c58&image_type=photo&orientation=horizontal&per_page=12`;
    this.setState({
      loaderVisible: true,
    });
    try {
      const response = await axios.get(apiSearch);
      console.log(response);
      return response.data.hits;
    } catch (error) {
      console.log(error.message);
    }
  };
  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchResults !== this.state.searchResults) {
      this.setState({ searchResults: this.getImage() });
    }
    this.setState({
      loaderVisible: false,
    });
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
