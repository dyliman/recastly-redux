import { connect } from 'react-redux';
import VideoList from './../components/VideoList.js';
import changeVideo from './../actions/currentVideo.js';

const mapStateToProps = (state) => {
  console.log(state);
  return {
    videos: state.videoList,
  };
};

const mapDispatchToProps = {
  handleVideoListEntryTitleClick: changeVideo
};

const VideoListContainer = connect(mapStateToProps, mapDispatchToProps)(VideoList);

export default VideoListContainer;