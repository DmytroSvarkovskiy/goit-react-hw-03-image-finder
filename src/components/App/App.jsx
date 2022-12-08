import axios from 'axios';

import { Searchbar } from '../Searchbar/Searchbar';
import { Button } from '../Button/Button';
import { ImageGallery } from '../ImageGallery/ImageGallery';
import { Wrapper } from './App.styled';
import { Component } from 'react';
import { GlobalStyle } from 'components/GlobalStyle';
import { Loader } from 'components/Loader/Loader';

export class App extends Component {
  state = {
    modalVisible: false,
    totalResult: null,
    searchResults: [
      // {
      //   id: 434918,
      //   pageURL:
      //     'https://pixabay.com/photos/shoes-legs-car-car-window-woman-434918/',
      //   type: 'photo',
      //   tags: 'shoes, legs, car',
      //   previewURL:
      //     'https://cdn.pixabay.com/photo/2014/09/03/20/15/shoes-434918_150.jpg',
      //   previewWidth: 150,
      //   previewHeight: 100,
      //   webformatURL:
      //     'https://pixabay.com/get/gaac8b249e2fc3a405cb54c0da25349b641edd95af7b748a146840291f2ee97495f36df8f5f36df88f37ee9ad42dab1a5_640.jpg',
      //   webformatWidth: 640,
      //   webformatHeight: 429,
      //   largeImageURL:
      //     'https://pixabay.com/get/ge90cd3057ad6d05b6189ab923f1542477bfd760c6c53ae7d0c3ab5d61e9284e10852cd24932e3678a0db5502197e7ab743bfdb36e83d6db111fa7ecabca81ae0_1280.jpg',
      //   imageWidth: 2165,
      //   imageHeight: 1453,
      //   imageSize: 587598,
      //   views: 1027652,
      //   downloads: 525169,
      //   collections: 2088,
      //   likes: 1646,
      //   comments: 325,
      //   user_id: 2323,
      //   user: 'Greyerbaby',
      //   userImageURL:
      //     'https://cdn.pixabay.com/user/2014/11/14/05-39-07-629_250x250.jpg',
      // },
      // {
      //   id: 887272,
      //   pageURL:
      //     'https://pixabay.com/photos/vintage-1950s-pretty-woman-887272/',
      //   type: 'photo',
      //   tags: 'vintage 1950s, pretty woman, vintage car',
      //   previewURL:
      //     'https://cdn.pixabay.com/photo/2015/08/13/17/24/vintage-1950s-887272_150.jpg',
      //   previewWidth: 150,
      //   previewHeight: 99,
      //   webformatURL:
      //     'https://pixabay.com/get/g055d29200cf94ba3bf6749f0bffc183c6dd915023303e22d059eff8bcea77bd3d13b433efa0847571040a53469e32d1c_640.jpg',
      //   webformatWidth: 640,
      //   webformatHeight: 426,
      //   largeImageURL:
      //     'https://pixabay.com/get/g16f51bf5fc6cfa5aa533a08d018b351546205e1d84b96f14d5298df480406d3674ad7079bd0b2cae4013c13d3af1110bf62fd03160a66559401060292ba5e619_1280.jpg',
      //   imageWidth: 5760,
      //   imageHeight: 3840,
      //   imageSize: 2128873,
      //   views: 446252,
      //   downloads: 287524,
      //   collections: 1277,
      //   likes: 1206,
      //   comments: 131,
      //   user_id: 334088,
      //   user: 'JillWellington',
      //   userImageURL:
      //     'https://cdn.pixabay.com/user/2018/06/27/01-23-02-27_250x250.jpg',
      // },
      // {
      //   id: 3404535,
      //   pageURL:
      //     'https://pixabay.com/photos/football-stadium-highway-night-3404535/',
      //   type: 'photo',
      //   tags: 'football stadium, highway, night',
      //   previewURL:
      //     'https://cdn.pixabay.com/photo/2018/05/15/23/02/football-stadium-3404535_150.jpg',
      //   previewWidth: 150,
      //   previewHeight: 99,
      //   webformatURL:
      //     'https://pixabay.com/get/gb4c1448b7dcc5846878a0639d01230397daf97658e5c8bd21c0537172ceeb50d777f2da4d8e7103e8c5e05eae7257f55887ac70bdf82d2945567543b47344d71_640.jpg',
      //   webformatWidth: 640,
      //   webformatHeight: 426,
      //   largeImageURL:
      //     'https://pixabay.com/get/gb10e02e704f03d501a8483275dd922a13fd965568cf7d46c05443efedaeedb39ac61c2968c3acd755b451f8ee08128aa550fd04d0155b50028421c22dc38d209_1280.jpg',
      //   imageWidth: 5879,
      //   imageHeight: 3919,
      //   imageSize: 6786653,
      //   views: 199125,
      //   downloads: 148021,
      //   collections: 1406,
      //   likes: 325,
      //   comments: 46,
      //   user_id: 7645255,
      //   user: 'jplenio',
      //   userImageURL:
      //     'https://cdn.pixabay.com/user/2022/11/21/17-13-53-31_250x250.png',
      // },
      // {
      //   id: 4322521,
      //   pageURL:
      //     'https://pixabay.com/photos/fiat-500-automobile-trees-4322521/',
      //   type: 'photo',
      //   tags: 'fiat 500, automobile, trees',
      //   previewURL:
      //     'https://cdn.pixabay.com/photo/2019/07/07/14/03/fiat-500-4322521_150.jpg',
      //   previewWidth: 150,
      //   previewHeight: 120,
      //   webformatURL:
      //     'https://pixabay.com/get/gac9264acca79b6d2cd8e0a6a0ad2e780e93e60c6fa56fd0b939feae67ef3d3b69e93e7febe4aafa77795a220525df522dcde831c39cf70e171be277396649f9c_640.jpg',
      //   webformatWidth: 640,
      //   webformatHeight: 514,
      //   largeImageURL:
      //     'https://pixabay.com/get/ge2bc946b6e16dc7bcb3c2b8bb68c016c5bb1f457ee431b47b9f7ef6375e15271328b16077d1be8ef7a7ea2439e08cc446c4eed7fa503335cdcba24b4da0f3a69_1280.jpg',
      //   imageWidth: 4000,
      //   imageHeight: 3215,
      //   imageSize: 2954155,
      //   views: 467219,
      //   downloads: 380115,
      //   collections: 698,
      //   likes: 836,
      //   comments: 154,
      //   user_id: 2364555,
      //   user: 'pixel2013',
      //   userImageURL:
      //     'https://cdn.pixabay.com/user/2020/07/25/21-10-11-80_250x250.jpg',
      // },
      // {
      //   id: 1853939,
      //   pageURL:
      //     'https://pixabay.com/photos/woman-fashion-model-hippie-1853939/',
      //   type: 'photo',
      //   tags: 'woman, fashion, model',
      //   previewURL:
      //     'https://cdn.pixabay.com/photo/2016/11/23/17/25/woman-1853939_150.jpg',
      //   previewWidth: 150,
      //   previewHeight: 100,
      //   webformatURL:
      //     'https://pixabay.com/get/g7ba216b87c53be4d68728ad70cb2d3b3bcf60867e3a87fb1d452d499e53831f7ccd22173e597bf3f950ab1ab31f92551e683aa0374af9d3f93dcd6bc7c690e6d_640.jpg',
      //   webformatWidth: 640,
      //   webformatHeight: 427,
      //   largeImageURL:
      //     'https://pixabay.com/get/g62cde6a277c4fd04a2da7a7b3e8bd4d0f52108e4510fa7e5442b23631967d49a033748a7611c866aef06f7a8421f794aefcebd9bd6be36906f7bfb2d806f66f0_1280.jpg',
      //   imageWidth: 6522,
      //   imageHeight: 4353,
      //   imageSize: 16048398,
      //   views: 290163,
      //   downloads: 199941,
      //   collections: 864,
      //   likes: 678,
      //   comments: 91,
      //   user_id: 2286921,
      //   user: 'Pexels',
      //   userImageURL:
      //     'https://cdn.pixabay.com/user/2016/03/26/22-06-36-459_250x250.jpg',
      // },
      // {
      //   id: 1197800,
      //   pageURL:
      //     'https://pixabay.com/photos/oldtimer-car-old-car-convertible-1197800/',
      //   type: 'photo',
      //   tags: 'oldtimer, car, old car',
      //   previewURL:
      //     'https://cdn.pixabay.com/photo/2016/02/13/13/11/oldtimer-1197800_150.jpg',
      //   previewWidth: 150,
      //   previewHeight: 99,
      //   webformatURL:
      //     'https://pixabay.com/get/gc0e00f3310845b837d941a6aa07c2c5f40c7e865f03e6f8cad1aa4fb8004523cb6de31f32393cedd4f745fb4c7174fede8eb8fe1fe29498cf0e8ffced2c24ec8_640.jpg',
      //   webformatWidth: 640,
      //   webformatHeight: 426,
      //   largeImageURL:
      //     'https://pixabay.com/get/g71c88a9ae0b837a7a9d2affdc42420781fb317f9c2323be876e9575c68353e60456b8088e5b20d2c6a8fda490531ef286863b9f7b3bb694ad91477bfaf71370a_1280.jpg',
      //   imageWidth: 5760,
      //   imageHeight: 3840,
      //   imageSize: 10114533,
      //   views: 567223,
      //   downloads: 415579,
      //   collections: 663,
      //   likes: 785,
      //   comments: 109,
      //   user_id: 2019050,
      //   user: 'Noel_Bauza',
      //   userImageURL:
      //     'https://cdn.pixabay.com/user/2021/03/27/13-38-22-879_250x250.png',
      // },
      // {
      //   id: 362150,
      //   pageURL: 'https://pixabay.com/photos/man-car-repair-car-repair-362150/',
      //   type: 'photo',
      //   tags: 'man, car, repair',
      //   previewURL:
      //     'https://cdn.pixabay.com/photo/2014/06/04/16/36/man-362150_150.jpg',
      //   previewWidth: 150,
      //   previewHeight: 99,
      //   webformatURL:
      //     'https://pixabay.com/get/g54fe6d5ea9d9aa5c247d3e8e6bebe59d15f2bb20b70b1e301def54f71009f580826fe7f289177a09e76eb11ab2d668d0_640.jpg',
      //   webformatWidth: 640,
      //   webformatHeight: 426,
      //   largeImageURL:
      //     'https://pixabay.com/get/g37d2cef6c74dc12ee82db6be8748ec0de870130bac21fb803f1fe471198f8b23801c77fded7822f9ae2bbb2ee4054c652277c9e06984f76c16ad00b214a76c1c_1280.jpg',
      //   imageWidth: 6000,
      //   imageHeight: 4000,
      //   imageSize: 8544150,
      //   views: 470770,
      //   downloads: 242483,
      //   collections: 729,
      //   likes: 705,
      //   comments: 144,
      //   user_id: 123690,
      //   user: 'RyanMcGuire',
      //   userImageURL:
      //     'https://cdn.pixabay.com/user/2014/06/04/17-13-09-273_250x250.jpg',
      // },
      // {
      //   id: 1851246,
      //   pageURL: 'https://pixabay.com/photos/porsche-car-brake-lights-1851246/',
      //   type: 'photo',
      //   tags: 'porsche, car, brake lights',
      //   previewURL:
      //     'https://cdn.pixabay.com/photo/2016/11/22/23/44/porsche-1851246_150.jpg',
      //   previewWidth: 150,
      //   previewHeight: 65,
      //   webformatURL:
      //     'https://pixabay.com/get/g6f477089d11a5f0539b0645b07f03cc7d78dd01c91fb79913ce00cbe55da598ffa6f30929e83c6a2219939831172973a690b57172db4adc8bffb0d5b7e1a6e7a_640.jpg',
      //   webformatWidth: 640,
      //   webformatHeight: 278,
      //   largeImageURL:
      //     'https://pixabay.com/get/g44983641ff03b46274b8caa2b7b5084927caaf4cdcaa34a759a525feb159101dbc1d905707d777b73f22e5acc39b6176ea70e73165295e3cf8fe2642531bcd5f_1280.jpg',
      //   imageWidth: 4800,
      //   imageHeight: 2092,
      //   imageSize: 1208358,
      //   views: 418470,
      //   downloads: 308899,
      //   collections: 708,
      //   likes: 691,
      //   comments: 112,
      //   user_id: 2286921,
      //   user: 'Pexels',
      //   userImageURL:
      //     'https://cdn.pixabay.com/user/2016/03/26/22-06-36-459_250x250.jpg',
      // },
      // {
      //   id: 2795557,
      //   pageURL:
      //     'https://pixabay.com/photos/double-decker-plane-mountains-fog-2795557/',
      //   type: 'photo',
      //   tags: 'double decker, plane, mountains',
      //   previewURL:
      //     'https://cdn.pixabay.com/photo/2017/09/28/13/38/double-decker-2795557_150.jpg',
      //   previewWidth: 150,
      //   previewHeight: 84,
      //   webformatURL:
      //     'https://pixabay.com/get/g194b58e392c0d6d1ec9dcb4d6200bee52ac8304b470ea4933dbae8c1edbeb32c00e6c45275a1bac79abe50cb14074ecbd208c523a357d8fdd9f6fbeda7c90cdf_640.jpg',
      //   webformatWidth: 640,
      //   webformatHeight: 359,
      //   largeImageURL:
      //     'https://pixabay.com/get/g5e7dcd2eb8fd47abaa156ce138070ecdd9e0b442fafc8a7ba7e1d7eb0238fb8fcce41dea997a759ecac84c0da991206227fe406ed37613917ec6d9d7c3eb6351_1280.jpg',
      //   imageWidth: 3616,
      //   imageHeight: 2030,
      //   imageSize: 981280,
      //   views: 199151,
      //   downloads: 135323,
      //   collections: 696,
      //   likes: 673,
      //   comments: 91,
      //   user_id: 127419,
      //   user: 'cocoparisienne',
      //   userImageURL:
      //     'https://cdn.pixabay.com/user/2022/09/18/06-49-47-879_250x250.jpg',
      // },
      // {
      //   id: 1853552,
      //   pageURL:
      //     'https://pixabay.com/photos/pedestrians-crossing-traffic-1853552/',
      //   type: 'photo',
      //   tags: 'pedestrians, crossing, traffic',
      //   previewURL:
      //     'https://cdn.pixabay.com/photo/2016/11/23/15/32/pedestrians-1853552_150.jpg',
      //   previewWidth: 150,
      //   previewHeight: 99,
      //   webformatURL:
      //     'https://pixabay.com/get/g5f83de1ef12fde79a5ee8b2f30d3106cd42df1b91a147399e1c94a3f2706bc5376c13405afefd5b29a300f6827f40a49ee0d805dd5955e465da6fdf3baf9b55f_640.jpg',
      //   webformatWidth: 640,
      //   webformatHeight: 425,
      //   largeImageURL:
      //     'https://pixabay.com/get/g4bbd5dcdb40f54ccfccb3c7a254a7d27fdbbf42029450ffd4cfdac9c997d1c6e5cc5ebf8f5681f54635b50376f97c547a984b23a02cfac41e448d6cb867e303c_1280.jpg',
      //   imageWidth: 4201,
      //   imageHeight: 2790,
      //   imageSize: 3935888,
      //   views: 589225,
      //   downloads: 484175,
      //   collections: 736,
      //   likes: 620,
      //   comments: 89,
      //   user_id: 2286921,
      //   user: 'Pexels',
      //   userImageURL:
      //     'https://cdn.pixabay.com/user/2016/03/26/22-06-36-459_250x250.jpg',
      // },
      // {
      //   id: 1853936,
      //   pageURL:
      //     'https://pixabay.com/photos/woman-model-hippie-fashion-style-1853936/',
      //   type: 'photo',
      //   tags: 'woman, model, hippie',
      //   previewURL:
      //     'https://cdn.pixabay.com/photo/2016/11/23/17/24/woman-1853936_150.jpg',
      //   previewWidth: 150,
      //   previewHeight: 100,
      //   webformatURL:
      //     'https://pixabay.com/get/gd60ca2f45973e5f34778bab886c581a65b3cbd0e99f5308e85ccb390020b2dd71b39d9f4bd6be77a59954eb870329b7d6aea72852d9a976a54bd1c43223f019a_640.jpg',
      //   webformatWidth: 640,
      //   webformatHeight: 427,
      //   largeImageURL:
      //     'https://pixabay.com/get/g31858be0c76c59cbd925a7422c80c68b274a69016080e7ef6a7952839fec768d313c3a9b09dcadc5f72ecd116adff4dd924190810550b42986d0eef8869df2c5_1280.jpg',
      //   imageWidth: 7360,
      //   imageHeight: 4912,
      //   imageSize: 13444851,
      //   views: 309752,
      //   downloads: 228582,
      //   collections: 766,
      //   likes: 594,
      //   comments: 66,
      //   user_id: 2286921,
      //   user: 'Pexels',
      //   userImageURL:
      //     'https://cdn.pixabay.com/user/2016/03/26/22-06-36-459_250x250.jpg',
      // },
      // {
      //   id: 2705402,
      //   pageURL:
      //     'https://pixabay.com/photos/ford-mustang-car-vehicle-red-car-2705402/',
      //   type: 'photo',
      //   tags: 'ford, mustang, car',
      //   previewURL:
      //     'https://cdn.pixabay.com/photo/2017/09/01/20/23/ford-2705402_150.jpg',
      //   previewWidth: 150,
      //   previewHeight: 96,
      //   webformatURL:
      //     'https://pixabay.com/get/g9aad16eecb9f502c19090855af5495e782daf3480d8950b529c48e34e18da0df5ae6175c34e02c35457ac9a0c01d2b6e81fee1f45c3569be98358b8f4d7b04d0_640.jpg',
      //   webformatWidth: 640,
      //   webformatHeight: 413,
      //   largeImageURL:
      //     'https://pixabay.com/get/g2f4c34b5ec2677e6fd407530c20b9a3ff55d5d32b37553812b3d153ece8eb545c1f2113944808820df78233360b5de5964cfa67face7f47240e7a9765c1e9350_1280.jpg',
      //   imageWidth: 5999,
      //   imageHeight: 3872,
      //   imageSize: 7886198,
      //   views: 299558,
      //   downloads: 205440,
      //   collections: 561,
      //   likes: 617,
      //   comments: 87,
      //   user_id: 1032521,
      //   user: 'Tama66',
      //   userImageURL:
      //     'https://cdn.pixabay.com/user/2022/01/04/10-58-00-805_250x250.jpg',
      // },
    ],
    currentPage: 1,
    searchName: 'car',
    loaderVisible: false,
  };
  // fetch = async () => {
  //   const url =
  //     await `https://pixabay.com/api/?q=${this.state.searchName}&page=${this.state.currentPage}&key=30629726-597c78df0089c177162f75c58&image_type=photo&orientation=horizontal&per_page=12`;
  //   fetch(url)
  //     .then(res => res.json())
  //     .then(console.log);
  // };
  getImage = async () => {
    const apiSearch = `https://pixabay.com/api/?q=${this.state.searchName}&page=${this.state.currentPage}&key=30629726-597c78df0089c177162f75c58&image_type=photo&orientation=horizontal&per_page=12`;
    try {
      const response = await axios.get(apiSearch);
      console.log(response);
      return response.data.hits;
    } catch (error) {
      console.log(error.message);
    }
  };
  componentDidUpdate(prevProps, prevState) {
    this.setState({
      loaderVisible: true,
    });
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
        <ImageGallery searchResults={this.state.searchResults}></ImageGallery>
        {this.state.loaderVisible && <Loader />}
        {this.state.searchResults.length > 12 && <Button />}
      </Wrapper>
    );
  }
}
