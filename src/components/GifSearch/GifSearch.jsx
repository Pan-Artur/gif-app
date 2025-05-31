import { Component } from "react";

import { StyledGifSearch } from "./StyledGifSearch";

export class GifSearch extends Component {
  onInputChange = (e) => {
    this.props.onInputChange(e.target.value);
  };

  onSearch = () => {
    this.props.onSearch();
  };

  handleKeyPress = (e) => {
    if (e.key === "Enter") {
      this.props.onSearch();
    }
  }

  render() {
    const { value } = this.props;

    return (
      <StyledGifSearch>
        <input type="text" value={value} onChange={this.onInputChange} onKeyDown={this.handleKeyPress} />
        <button type="button" onClick={this.onSearch}>Пошук</button>
      </StyledGifSearch>
    );
  }
}
