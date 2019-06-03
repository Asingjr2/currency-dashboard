import React from "react";
import styled from 'styled-components';
import PropTypes from 'prop-types';
import VideoListItem from "./VideoItem";

const VideoResultsListStyled = styled.div`
  display: grid;
  margin-left: 10px;
  margin-top: 50px;
  grid-template-columns: repeat(1fr);
  grid-gap: 15px;
  border-radius: 5px;
  min-height: 100px;
  max-height: 550px;
  overflow: scroll;
  border: 4px double white;
  padding: 10px;
`

const VideoList = (props) => {
  const videoItems =  props.videos.map((video) => { 
    return (
    <div>
      <VideoListItem 
        onVideoSelect={props.onVideoSelect}
        video={video} 
      /> 
      <div className="ui inverted divider"></div>
    </div>
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
