import React from "react";
import styled from 'styled-components';
import PropTypes from 'prop-types';
import VideoListItem from "./VideoItem";

const VideoResultsListStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(1fr);
  grid-gap: 15px;
  border-radius: 5px;
`

const VideoList = (props) => {
  const videoItems =  props.videos.map((video) => { 
    return (
    <VideoListItem 
      onVideoSelect={props.onVideoSelect}
      key={video.etag} 
      video={video} 
    />
    );
  })

  return (
    <VideoResultsListStyled>
      {videoItems}
    </VideoResultsListStyled>
  );
}

VideoList.propTypes = {
  videos: PropTypes.array
}

export default VideoList
