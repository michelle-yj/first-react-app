import React from 'react';
import './profile.css';
import Button from '../components/Button';
import Header from '../components/Header';

const createName = (person) => {
    return `${person.firstName} ${person.lastName}`;
}

const Profile = ({ person }) => (
  <div className="profile-wrapper">
    {console.log(person)}
      <div className="profile-header">
        <img className="profile-pic" src={person.imgPath} alt="profile pic" />
        <Header className="header">{person.firstName} {person.lastName}</Header>
        <Button link={`https://github.com/${person.userName}`} size="large">{`@${person.userName}`}</Button>
      </div>
      <ol className="profile-repositories">
        {
          person.repositories.map((item) =>
          <li key={item.url}><a href={item.url} target="_blank">{item.name}</a></li>
        )}
      </ol>
    </div>
);

export default Profile;
