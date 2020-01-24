import React from 'react';
import { useParams } from "react-router-dom";

import Header from '../components/Header';

function UserProfile() {
  // We can use the `useParams` hook here to access
  // the dynamic pieces of the URL.
  let { userName } = useParams();

  return (
    <div>
      <Header>{userName}</Header>
    </div>
  );
}

export default UserProfile;
