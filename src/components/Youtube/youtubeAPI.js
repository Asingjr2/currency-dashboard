import axios from 'axios';
import {REACT_APP_YOUTUBE_APIKEY, REACT_APP_YOUTUBE_BASE_URL} from '../../config';

// Creating configurable axios object with predetermined key and params
export default axios.create({
  baseURL: REACT_APP_YOUTUBE_BASE_URL, 
  params: {
    part: 'snippet',
    key: REACT_APP_YOUTUBE_APIKEY,
    maxResults: 10
  }
});
