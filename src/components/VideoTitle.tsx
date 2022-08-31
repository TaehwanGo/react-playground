import React from 'react';

import { VideoCurrentInfo, VIDEO_GROUP_LIST } from '@/pages/NestedRouting';

interface VideoTitleProps {
  videoGroupList: typeof VIDEO_GROUP_LIST;
  videoCurrentInfo: VideoCurrentInfo;
}

const VideoTitle = (props: VideoTitleProps) => {
  const {
    videoGroupList, //
    videoCurrentInfo,
  } = props;
  return (
    <div>
      {/* show videoGroupTitle and videoTitle */}
      <h1>{videoGroupList[videoCurrentInfo.currentGroupIndex].videoGroupTitle}</h1>
      <h2>
        {
          videoGroupList[videoCurrentInfo.currentGroupIndex].videos[
            videoCurrentInfo.currentVideoIndex
          ].title
        }
      </h2>
    </div>
  );
};

export default VideoTitle;
