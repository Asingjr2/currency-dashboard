import React from 'react';
import PropTypes from 'prop-types';

const VideoItem = ({ video, onVideoSelect }) => {
  return (
  <div className="item video-item"
    onClick={() => onVideoSelect(video)} key={video.etag}>
    <img className="ui image"
      src={video.snippet.thumbnails.medium.url} 
      alt={video.description} />
    <div className="content">
      <div className="header vid-text">{video.snippet.title}</div>
    </div>
  </div>
  );
}

VideoItem.propTypes = {
  video: PropTypes.object,
  onVideoSelect: PropTypes.func
}

export default VideoItem;
