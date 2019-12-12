import React from 'react';

const Profile = ({ person }) => (
  <div className="profile-wrapper">
    {console.log(person)}
      <div className="profile-header">
        <img className="profile-pic" src={person.imgPath} alt="profile pic" />
        <h1 className="profile-heading">{person.firstName} {person.lastName}</h1>
      </div>
    <ul className="profile-repositories">
        </ul>
  </div>
);

export default Profile;


// TODO: map over repos here and build out <li>s with an <a> inside it,
//using the url and name fields from the repositories in data.json
