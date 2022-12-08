import axios from 'axios';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import 'react-toastify/dist/ReactToastify.css';
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
    totalResult: 0,
    searchResults: [],
    currentPage: 1,
    searchName: '',
    loaderVisible: false,
    modalData: {},
  };
  componentDidUpdate(_, prevState) {
    if (
      prevState.searchName !== this.state.searchName ||
      prevState.currentPage !== this.state.currentPage
    ) {
      this.getImage();
    }
  }
  findImage = word => {
    if (this.state.searchName !== word) {
      this.setState({ searchName: word });
      this.setState({ currentPage: 1 });
      this.setState({ searchResults: [] });
    }
  };
  togleModal = () => {
    this.setState({ modalVisible: !this.state.modalVisible });
  };
  onImageClick = e => {
    this.togleModal();
    const currentElId = Number(e.target.id);

    const currentItem = this.state.searchResults.find(
      element => element.id === currentElId
    );
    const modalData = {
      src: currentItem.largeImageURL,
      alt: currentItem.tags,
    };
    this.setState({ modalData });
  };
  loadMoreClick = () => {
    this.setState(prevState => ({ currentPage: prevState.currentPage + 1 }));
  };
  getImage = async () => {
    this.setState({ loaderVisible: true });
    const apiSearch = `https://pixabay.com/api/?q=${this.state.searchName}&page=${this.state.currentPage}&key=30629726-597c78df0089c177162f75c58&image_type=photo&orientation=horizontal&per_page=12`;
    try {
      const response = await axios.get(apiSearch);
      this.setState(prevState => ({
        searchResults: [...prevState.searchResults, ...response.data.hits],
      }));
      this.setState({ totalResult: response.data.totalHits });
    } catch (error) {
      console.error(error);
    } finally {
      this.setState({ loaderVisible: false });
    }
  };

  render() {
    const { totalResult, searchResults, modalVisible, loaderVisible } =
      this.state;
    const totalPages = Math.ceil(totalResult / searchResults.length);
    return (
      <Wrapper>
        <GlobalStyle />
        <Searchbar onSubmit={this.findImage} />
        {modalVisible && (
          <Modal
            dataImage={this.state.modalData}
            closeModal={this.togleModal}
          />
        )}
        <ImageGallery
          searchResults={searchResults}
          lookBigImg={this.onImageClick}
        ></ImageGallery>
        {loaderVisible && <Loader />}
        {searchResults.length !== 0 && totalPages !== 1 && (
          <Button onClick={this.loadMoreClick} />
        )}
      </Wrapper>
    );
  }
}
