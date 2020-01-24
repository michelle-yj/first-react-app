import React from 'react';
import Button from '../components/Button';
import Header from '../components/Header';
import styled from 'styled-components';
import { secondaryGrey, paleGreen, paleWhite, primaryBrown } from '../colors';
import { halfSpacer, baseSpacer, doubleSpacer } from '../sizes';

const StyledProfileWrapper = styled.div`
    flex: 1;
    background-color: ${paleWhite};
    justify-content: center;
    border-radius: ${halfSpacer};
    margin: 15px ${baseSpacer};
    padding-bottom: ${baseSpacer};
    box-shadow: 4px 4px lightGrey;
    height: 400px;
`;

const StyledProfileHeader = styled.div`
    font-size: ${doubleSpacer};
    text-align: center;
`;

const StyledImage = styled.img`
    width: 72px;
    height: 72px;
    border-radius: 50px;
    border: 5px solid ${paleGreen};
    margin-top: ${doubleSpacer};
`;

const StyledRepos = styled.ol`
    margin-left: ${doubleSpacer};
    text-align: left;
    letter-spacing: 2px;
`;

const StyledLink = styled.a`
    text-decoration: none;
    color: ${primaryBrown};
    &:hover {
      background-color: ${paleGreen};
    }
`;

const StyledIcon = styled.span`
    color: ${primaryBrown};
`;

const createName = (person) => {
    return `${person.firstName} ${person.lastName}`;
}

const Profile = ({ person, onClick }) => (
  <StyledProfileWrapper backgroundColor={paleWhite}>
    {console.log(person)}
    <StyledProfileHeader>
          <StyledImage color={paleGreen} src={person.imgPath} alt="profile pic" />
      </StyledProfileHeader>
      <Header color={secondaryGrey}>{person.firstName} {person.lastName}</Header>
      <Button
            link={`https://github.com/${person.userName}`}
            size='small'
            backgroundColor={paleGreen}
            color={secondaryGrey}
        >
          @{person.userName}
        </Button>
      <StyledRepos>
        {
          person.repositories.map((item) =>
          <li key={item.url}>
            <StyledLink
                activeColor={primaryBrown}
                backgroundColor={paleGreen}
                href={item.url}
                onClick={onClick}>{item.name}
            </StyledLink>
          <StyledIcon color={secondaryGrey}> {item.stars} &#10026;</StyledIcon></li>
        )}
        </StyledRepos>
  </StyledProfileWrapper>
);

export default Profile;
