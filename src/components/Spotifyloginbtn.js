// src/Login.js
import React from 'react';
import { CLIENT_ID, REDIRECT_URI, AUTH_ENDPOINT, RESPONSE_TYPE, SCOPES } from './components/spotifyConfig';

const Login = () => {
  const authUrl = `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${encodeURIComponent(REDIRECT_URI)}&scope=${encodeURIComponent(SCOPES.join(' '))}&response_type=${RESPONSE_TYPE}`;

  return (
    <div>
      <h2>Login with Spotify</h2>
      <a href={authUrl}>
        <button>Login with Spotify</button>
      </a>
    </div>
  );
};

export default Login;
