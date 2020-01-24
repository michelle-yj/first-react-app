import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Button from '../components/Button';
import Header from '../components/Header';

import { primaryGrey, secondaryGrey, paleGreen, paleWhite } from '../colors';
import { halfSpacer } from '../sizes';

const StyledProfileWrapper = styled.div`
  flex: 1;
  background: ${paleWhite};
  border: 1px solid ${primaryGrey};
  border-radius: 8px;
  margin: 16px;
  color: #666;
  padding: 16px;
`;

const StyledProfileHeader = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const StyledProfilePic = styled.img`
  width: 72px;
  height: 72px;
  border-radius: 50%;
  border: 3px solid ${paleGreen};
  margin: 16px;
`;

const StyledProfileRepos = styled.ol`
`;

const StyledProfileRepoLink = styled.li`
  padding-left: ${halfSpacer};
  color: ${secondaryGrey};
  text-decoration: none;
  text-align: justify;
`;

const StyledProfileLink = styled.a`
  color: ${secondaryGrey};
  text-decoration: none;
  &:hover {
    filter: brightness(115%);
  }
`;

const StyledIcon = styled.span`
    color: ${secondaryGrey};
`;

const createName = (person) => {
  return `${person.firstName} ${person.lastName}`;
}

const visitGithub = (person) => {
  return window.location = `https://github.com/${person.userName}`;
}

const Profile = ({ person }) => (
  <StyledProfileWrapper>
    <StyledProfileHeader>
      <StyledProfilePic className="profile-pic" src={person.imgPath} alt="profile pic" />
      <Link to={`/user/${person.userName}`}><Header color={secondaryGrey}>{createName(person)}</Header></Link>
      <Button
        size="small"
        color={paleGreen}
        onClick={() => visitGithub(person)}
      >
        {`@${person.userName}`}
      </Button>
    </StyledProfileHeader>
    <StyledProfileRepos>
      {
         person.repositories.map((item) => (
          <StyledProfileRepoLink key={item.url}>
            <StyledProfileLink href={item.url}>{item.name}</StyledProfileLink>
            <StyledIcon> {item.stars} &#10026;</StyledIcon>
          </StyledProfileRepoLink>
        ))
      }
    </StyledProfileRepos>
  </StyledProfileWrapper>
);

export default Profile;
