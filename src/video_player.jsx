import React, { useState } from 'react';
import ReactPlayer from 'react-player';

const VideoPlayer = () => {
  const [url, setUrl] = useState('');
  const [videoUrl, setVideoUrl] = useState('');

  // Handle input change
  const handleUrlChange = (e) => {
    setUrl(e.target.value);
  };

  // Handle button click to update the video URL
  const handleButtonClick = () => {
    setVideoUrl(url);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '30px' }}>
      <h1>React Video Player</h1>
      <div style={{ display: 'flex'}}>
        <input
          type="text"
          placeholder="Enter video URL"
          value={url}
          onChange={handleUrlChange}
          style={{ width: '80%', padding: '10px'}}
        />

        <button
          onClick={handleButtonClick}
          style={{
            marginLeft: '20px',
            padding: '10px',
            fontSize: '16px',
            backgroundColor: '#007BFF',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
          }}
        >
          Play
        </button>
      </div>
      <div style={{ marginTop: '20px' }}>
        {videoUrl && <ReactPlayer url={videoUrl} />}
      </div>
    </div>
  );
};

export default VideoPlayer;
