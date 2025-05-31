import { Component } from 'react';

import { GifSearch } from './components/GifSearch/GifSearch.jsx';
import { GifList } from './components/GifList/GifList.jsx';

import './App.css';

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchValue: "",
      gifs: [],
      hasSearched: false,
    };

    this.apiKey = "xDpY0tKaj01CqTEe1eEWcKCCxypoRuOq";
    this.apiUrl = "https://api.giphy.com/v1/gifs/search";
  }

  handleInputChange = (value) => {
    this.setState({ searchValue: value });
  }

  handleSearch = async () => {
    const { searchValue } = this.state;

    if (!searchValue.trim()) return;

    try {
      const response = await fetch(`${this.apiUrl}?api_key=${this.apiKey}&q=${encodeURIComponent(searchValue)}&limit=20`);

      const data = await response.json();

      this.setState({ gifs: data.data, hasSearched: true });
    } catch(error) {
      console.error(error);
    }
  }

  render() {
    const { searchValue } = this.state;

    return (
      <>
        <GifSearch value={searchValue} onInputChange={this.handleInputChange} onSearch={this.handleSearch} onKeyPress={this.handleKeyPress} />
        <GifList gifs={this.state.gifs} />
      </>
    );
  }
}
