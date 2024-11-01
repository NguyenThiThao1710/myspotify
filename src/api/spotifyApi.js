// src/api/spotifyApi.js
import axios from 'axios';

let accessToken = ''; 

export const setAccessToken = (token) => {
  accessToken = token;
};

export const getPlaylistById = async (playlistId) => {
  try {
    const response = await axios.get(`https://api.spotify.com/v1/playlists/${playlistId}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching playlist:', error);
    return null;
  }
};
