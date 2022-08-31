import React, { useEffect, useState } from 'react';
import VideoTitle from '@/components/VideoTitle';

export const VIDEO_GROUP_LIST = [
  {
    videoGroupId: 'a',
    videoGroupTitle: '영상 1',
    videos: [
      {
        id: '1',
        title: '영상 1-1',
        url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      },
      {
        id: '2',
        title: '영상 1-2',
        url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      },
    ],
  },
  {
    videoGroupId: 'b',
    videoGroupTitle: '영상 2',
    videos: [
      {
        id: '3',
        title: '영상 2-1',
        url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      },
      {
        id: '4',
        title: '영상 2-2',
        url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      },
      {
        id: '5',
        title: '영상 2-3',
        url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      },
    ],
  },
  {
    videoGroupId: 'c',
    videoGroupTitle: '영상 3',
    videos: [
      {
        id: 'c1',
        title: '영상 3-1',
        url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      },
      {
        id: 'c2',
        title: '영상 3-2',
        url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      },
      {
        id: 'c3',
        title: '영상 3-3',
        url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      },
      {
        id: 'c4',
        title: '영상 3-4',
        url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      },
    ],
  },
];

export interface VideoCurrentInfo {
  currentGroupIndex: number;
  currentVideoIndex: number;
  lastGroupIndex: number;
  lastVideoIndex: number;
}

const NestedRouting = () => {
  const [currentTitle, setCurrentTitle] = useState('');

  useEffect(() => {
    setCurrentTitle(VIDEO_GROUP_LIST[0].videos[0].title);
  }, []);

  const currentVideo = {
    currentGroupIndex: 0,
    currentVideoIndex: 0,
    lastGroupIndex: VIDEO_GROUP_LIST.length - 1,
    lastVideoIndex: VIDEO_GROUP_LIST[0].videos.length - 1,
  };

  const [videoCurrentInfo, setVideoCurrentInfo] = useState<VideoCurrentInfo>(currentVideo);

  // handle click next video button
  const handleNextVideo = () => {
    // return if last video
    if (
      VIDEO_GROUP_LIST[videoCurrentInfo.currentGroupIndex].videos[
        videoCurrentInfo.currentVideoIndex
      ].id ===
      VIDEO_GROUP_LIST[VIDEO_GROUP_LIST.length - 1].videos[
        VIDEO_GROUP_LIST[VIDEO_GROUP_LIST.length - 1].videos.length - 1
      ].id
    ) {
      console.log('last video');
      return;
    }

    if (
      videoCurrentInfo.currentVideoIndex <
      VIDEO_GROUP_LIST[videoCurrentInfo.currentGroupIndex].videos.length - 1
    ) {
      setVideoCurrentInfo({
        ...videoCurrentInfo,
        currentVideoIndex: videoCurrentInfo.currentVideoIndex + 1,
      });
    } else {
      setVideoCurrentInfo({
        ...videoCurrentInfo,
        currentVideoIndex: 0,
        currentGroupIndex: videoCurrentInfo.currentGroupIndex + 1,
      });
    }
  };

  // handle click previous video button
  const handlePreviousVideo = () => {
    // return if first video
    if (
      VIDEO_GROUP_LIST[videoCurrentInfo.currentGroupIndex].videos[
        videoCurrentInfo.currentVideoIndex
      ].id === VIDEO_GROUP_LIST[0].videos[0].id
    ) {
      console.log('first video');
      return;
    }

    if (videoCurrentInfo.currentVideoIndex > 0) {
      setVideoCurrentInfo({
        ...videoCurrentInfo,
        currentVideoIndex: videoCurrentInfo.currentVideoIndex - 1,
      });
    } else {
      setVideoCurrentInfo({
        ...videoCurrentInfo,
        currentVideoIndex: videoCurrentInfo.lastVideoIndex,
        currentGroupIndex: videoCurrentInfo.currentGroupIndex - 1,
      });
    }
  };

  return (
    <div>
      <VideoTitle videoGroupList={VIDEO_GROUP_LIST} videoCurrentInfo={videoCurrentInfo} />
      <div>
        <button type="button" onClick={handlePreviousVideo}>
          이전 영상
        </button>
        <button type="button" onClick={handleNextVideo}>
          다음 영상
        </button>
      </div>
    </div>
  );
};

export default NestedRouting;
