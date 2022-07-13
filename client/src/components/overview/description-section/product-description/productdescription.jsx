import React from 'react';
import styled from 'styled-components';
import Slogan from './slogan.jsx';
import Description from './description.jsx';

function ProductDescription() {
  return (
    <ProductDescriptionContainer>
      <Slogan />
      <Description />
    </ProductDescriptionContainer>
  );
}

const dudeImage = 'https://wegotthiscovered.com/wp-content/uploads/2021/08/free-guy-dude-1200x675.jpg';

const ProductDescriptionContainer = styled.div`
  display: grid;
  grid-template-rows: 1fr 2fr;
  background-color: #CCC;
  background-image: url("${dudeImage}");
  background-size: contain;
  background-repeat: no-repeat;
  padding-top: 60px;
  padding-left: 140px;
  padding-right: 50px;
`;

export default ProductDescription;