import React from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';

import Header from '../components/Header';
import Profile from '../components/Profile';

import { primaryGrey, secondaryGrey } from '../colors';
import { baseSpacer, halfSpacer} from '../sizes';
import data from '../data.json';

const StyledProfiles = styled.div`
    display: flex;
    flex-direction: column;
    font-family: 'Quicksand', 'Montserrat';
    width: 100%;
    margin-top: ${baseSpacer};
    margin-bottom: ${baseSpacer};
    background-color: ${props => props.backgroundColor ? props.backgroundColor : 'yellow'};
    border-radius: ${halfSpacer};
@media screen and (min-width: 700px) {
    flex-direction: row-reverse;
}
@media screen and (min-width: 1000px) {
    flex-direction: row;
}
`;

function Home() {
  return (
    <>
      <Header color={secondaryGrey}>Hello!</Header>
      <StyledProfiles backgroundColor={primaryGrey}>
        {
          (Array.isArray(data) && data.length !== 0) && data.map((person) => (
            <Profile person={person} key={person.userName} />
          ))
        }
      </StyledProfiles>
    </>
  );
}

export default withRouter(Home);
