import React from 'react';
import styled from 'styled-components';
import ThemeContext from '../../../ThemeContext.jsx';
import Themes from '../../../themes.js';

function changeColorScheme(colorScheme, setColorScheme) {
  const name = colorScheme.name;
  let newColorScheme = Themes.nile.light;

  switch(name) {
    case 'nile light':
      newColorScheme = Themes.nile.dark;
      break;
    case 'nile dark':
      newColorScheme = Themes.nile.light;
      break;
    case 'modern light':
      newColorScheme = Themes.modern.dark;
      break;
    case 'modern dark':
      newColorScheme = Themes.modern.light;
      break;
    case 'forest light':
      newColorScheme = Themes.forest.dark;
      break;
    case 'forest dark':
      newColorScheme = Themes.forest.light;
      break;
    case 'sky light':
      newColorScheme = Themes.sky.dark;
      break;
    case 'sky dark':
      newColorScheme = Themes.sky.light;
      break;
    default:
      newColorScheme = Themes.nile.light;
  }

  console.log('new color scheme is', newColorScheme);
  console.log('new body color is', newColorScheme.bodyColor);
  document.body.style.backgroundColor = newColorScheme.bodyColor;

  setColorScheme(newColorScheme);
}

function LightDarkButton() {
  const [colorScheme, setColorScheme] = React.useContext(ThemeContext);
  return <button onClick={() => changeColorScheme(colorScheme, setColorScheme)}>Dark</button>;
}

export default LightDarkButton;
