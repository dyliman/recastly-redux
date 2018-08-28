import React from 'react';
import Search from './../components/Search.js';
import { connect } from 'react-redux';
import handleVideoSearch from '../actions/search.js';

const mapDispatchToProps = {
  handleSearchInputChange: handleVideoSearch
};

export default connect(null, mapDispatchToProps)(Search);