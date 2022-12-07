// import axios from 'axios';
import { Searchbar } from '../Searchbar/Searchbar';
import { Button } from '../Button/Button';
import { ImageGallery } from '../ImageGallery/ImageGallery';
import { Wrapper } from './App.styled';
import { Component } from 'react';
import { GlobalStyle } from 'components/GlobalStyle';

export class App extends Component {
  render() {
    return (
      <Wrapper>
        <GlobalStyle />
        <Searchbar />
        <ImageGallery></ImageGallery>
        <Button />
      </Wrapper>
    );
  }
}
