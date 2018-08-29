import { connect } from 'react-redux';
import VideoPlayer from '../components/VideoPlayer.js';
import changeVideo from '../actions/currentVideo.js';

const mapStateToProps = (state) => {
  return {
    video: state.currentVideo,
  };
};

const VideoPlayerContainer = connect(mapStateToProps)(VideoPlayer);

export default VideoPlayerContainer;