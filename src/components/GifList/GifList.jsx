import { Component } from "react";

import { StyledGifList } from "./StyledGifList";

export class GifList extends Component {
  render() {
    const { gifs, hasSearched } = this.props;

    return (
      <StyledGifList>
        {gifs.length > 0 ? (
          gifs.map((gif) => (
            <li key={gif.id}>
              <img src={gif.images.fixed_height.url} alt={gif.title} />
            </li>
          ))
        ) : (
          !hasSearched && <p>Немає знайдених GIF-файлів</p>
        )}
      </StyledGifList>
    );
  }
}
