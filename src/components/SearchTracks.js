// src/components/SearchTracks.js
import React, { useState, useEffect } from 'react';
import { setAccessToken, getPlaylistById } from '../api/spotifyApi';

const SearchTracks = () => {
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    const fetchPlaylist = async () => {
      setAccessToken('https://developer.spotify.com/dashboard/c2c9b1955aed4fb8897acbddba1a9653');
      const playlist = await getPlaylistById('54ZA9LXFvvFujmOVWXpHga');
      if (playlist && playlist.tracks) {
        setTracks(playlist.tracks.items);
      }
    };

    fetchPlaylist();
  }, []);

  return (
    <div>
      <h2>Playlist Tracks</h2>
      {tracks.map((trackItem) => (
        <div key={trackItem.track.id} style={{ margin: '20px 0' }}>
          <h3>{trackItem.track.name}</h3>
          <p>{trackItem.track.artists.map((artist) => artist.name).join(', ')}</p>
          <img src={trackItem.track.album.images[0].url} alt={trackItem.track.name} style={{ width: '100px' }} />
          {trackItem.track.preview_url ? (
            <div>
              <audio controls src={trackItem.track.preview_url}>
                Your browser does not support the audio element.
              </audio>
            </div>
          ) : (
            <p>Preview not available</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default SearchTracks;
