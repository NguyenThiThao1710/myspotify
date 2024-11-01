// src/Callback.js
import React, { useEffect } from 'react';

const Callback = () => {
  useEffect(() => {
    const hash = window.location.hash;
    let token = null;

    if (hash) {
      token = hash.substring(1).split('&').find(elem => elem.startsWith('access_token')).split('=')[1];
      localStorage.setItem('spotifyToken', token);
      window.location.hash = '';
      window.location.href = '/';
    }
  }, []);

  return <h2>Logging in...</h2>;
};

export default Callback;
