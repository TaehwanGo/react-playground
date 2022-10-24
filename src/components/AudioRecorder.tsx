import React from 'react';
import { useReactMediaRecorder } from 'react-media-recorder';

const AudioRecorder = () => {
  const { status, startRecording, stopRecording, mediaBlobUrl } = useReactMediaRecorder({
    audio: true,
  });

  console.log('mediaBlobUrl', mediaBlobUrl);

  return (
    <div>
      <p>{status}</p>
      <button type="button" onClick={startRecording}>
        Start Recording
      </button>
      <button type="button" onClick={stopRecording}>
        Stop Recording
      </button>
      <audio src={mediaBlobUrl} controls>
        <track kind="captions" />
      </audio>
    </div>
  );
};

export default AudioRecorder;
