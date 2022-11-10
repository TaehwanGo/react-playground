import React from 'react';
import ReactPlayer from 'react-player';

// https://gist.github.com/jsturgis/3b19447b304616f18657
const Player = () => {
  return (
    <div>
      <h1>Player</h1>
      {/* <ReactPlayer url="https://www.youtube.com/watch?v=ysz5S6PUM-U" /> */}
      <ReactPlayer
        width="100%"
        height="100%"
        url="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
        // url="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3"
        controls
        light
        config={{
          file: {
            attributes: {
              controlsList: 'nodownload',
            },
            // forceAudio: true,
          },
        }}
      />
    </div>
  );
};

export default Player;
