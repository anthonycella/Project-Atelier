import React from 'react';
import styled from 'styled-components';
import TitleSection from './title-section/titlesection.jsx';
import MainSection from './main-section/mainsection.jsx';
import DescriptionSection from './description-section/descriptionsection.jsx';

function Overview() {
  return (
    <OverviewComponent>
      <TitleSection />
      <MainSection />
      <DescriptionSection />
    </OverviewComponent>
  );
}

const OverviewComponent = styled.div`
  align-self: stretch;
`;

export default Overview;