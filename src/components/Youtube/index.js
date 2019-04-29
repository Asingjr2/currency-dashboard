import React from 'react';
import Page from '../Shared/Page';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail'
import youtube from './youtubeAPI';

class WatchVideos extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      videos: [], 
      selectedVideo: null
    };

    this.onSearch('what is a bitcoin')
  }

  onSearch = async term => {
    const searchResponse = await youtube.get('search', {
      params: {
        q: term
      }
    });

    // setting default search value
    this.setState({
      videos: searchResponse.data.items,
      selectedVideo: searchResponse.data.items[0],
      toggleResults: false
    });
  }

  onVideoSelect = video => {
    this.setState({ selectedVideo: video});
  }

  toggleResults = () => {
    let toggle = !this.state.toggleResults
    this.setState({
      toggleResults: toggle
    });
  }

  // Updated below with videoDetail that will display selectedVideo info from state.
  render() {
    return (
      <Page name="videos">
        <div className="ui cointainer">
          <SearchBar onFormSubmit={this.onSearch}/>
          <div className="ui grid">
            <div className="ui row margin25">
              <div className="eleven wide column">
                <VideoDetail video={this.state.selectedVideo} />
              </div>
              <div className="five wide column">
                <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect} />
              </div>
            </div>
          </div>
        </div>
      </Page>
    );
  }
}

export default WatchVideos;
