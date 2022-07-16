import React from 'react';
import styled from 'styled-components';
import { BsPinterest } from 'react-icons/bs';

function Pinterest({ selectedPhoto }) {
  const imageUrl = selectedPhoto.thumbnail_url;
  // console.log('selected photo for pinterest is', imageUrl);
  const baseUrl = 'https://www.pinterest.com/pin/create/button/';
  const mediaUrl = `?media=${imageUrl}`;
  // const descriptionUrl = '&amp;description="Look What I just found!"';
  // const websiteUrl = '&amp;url=http://localhost:3000/';

  const fullUrl = baseUrl + mediaUrl;

  return (
    <PinterestIcon>
      <a data-pin-do="buttonBookmark" href={fullUrl}>
        <BsPinterest size={25} color="#E60023" />
      </a>
    </PinterestIcon>
  );
}

const PinterestIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 5px;
`;

export default Pinterest;
