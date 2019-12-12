import React, { useState } from 'react';
import styled, { css } from 'styled-components';

const SVG = styled.svg.attrs((props) => ({
  starFill: () => {
    switch (props.rating) {
      case 1:
        return css`
        &#one path {
          fill: yellow;
        }
        `;
      case 2:
        return css`
        &#one path, &#two path {
          fill: yellow;
        }
          `;
      case 3:
        return css`
        &#one path, &#two path, &#three path {
          fill: yellow;
        }
        `;
      case 4:
        return css`
         &#one path, &#two path, &#three path, &#four path {
          fill: yellow;
        }
        `;
      case 5:
        return css`
          & path {
          fill: yellow;
        }
        `;
      default:
        return '';
    }
  }
}))`
  & path {
    fill: url(#grad);
  }
  ${props => props.starFill}
`;



function App() {
  const rating = 4.7;
  const first = Math.floor(rating);
  const des = Math.round((rating - first) * 100);
  console.log(des)
  const arr = ['one', 'two', 'three', 'four', 'five'];

  return (
    <div className="App">
      <header className="App-header">
        {arr.map(item => (
          <SVG id={item} rating={first} key={item} width="27" height="24" viewBox="0 0 27 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="grad">
                <stop stopColor="yellow" offset="0%" />
                <stop stopColor="yellow" offset={`${des}%`} />
                <stop stopColor="gray" offset={`${des}%`} />
                <stop stopColor="gray" offset="100%" />
              </linearGradient>
            </defs>
            <path className="icon"
              d="M13.5 0L16.5309 8.98278H26.3393L18.4042 14.5344L21.4351 23.5172L13.5 17.9656L5.5649 23.5172L8.59584 14.5344L0.660737 8.98278H10.4691L13.5 0Z"
            />
          </SVG>
        ))}

      </header>
    </div>
  );
}

export default App;
