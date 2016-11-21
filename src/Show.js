import React, { Component } from 'react';
import { connect } from 'react-redux';
import store from './index';
import { fetchVideos, fetchReps } from './actions';
import YouTubeGrid from 'react-youtube-grid';
import Congress from './dumb/Congress';

class Show extends Component {

  componentWillMount() {
    store.dispatch(fetchVideos(this.props.active.name));
    store.dispatch(fetchReps(this.props.active.zip));
  }

  hasImage() {
    if (this.props.active.image_url) {
      return (
        <img
          className="show-image"
          src={ this.props.active.image_url }
          alt={ this.props.active.name }
        />
      )
    } else {
      return (
        <div className="show-image no">Image Not Available</div>
      )
    }
  }

  render() {
    if (this.props.active) {
      return (
        <div className="show-wrapper">
          <div className="show-top">
            { this.hasImage() }
            <div className="show-top-right">
              <p>
                { this.props.active.name }
              </p>
              <p>
                <span>Gender: { this.props.active.gender }</span>
                <span>Race: { this.props.active.race }</span>
                <span>Age: { this.props.active.age }</span>
              </p>
              <p>
                Date killed: { new Date(this.props.active.date).toDateString() }
                <br />
                Location: { `${this.props.active.street}, ${this.props.active.city}, ${this.props.active.state} ${this.props.active.zip} ` }
                <br />
                Cause of death: { this.props.active.cause }
              </p>
              <p>
                Agency (or Agencies) Responsible: { this.props.active.agency }
                <br />
                Disposition: { this.props.active.disposition }
                <br />
                Charges: { this.props.active.charges }
              </p>
              <p>
                <a href={ this.props.active.link_url } target="_blank">More information</a>
              </p>
            </div>
          </div>
          <Congress reps={ this.props.reps } />
          <YouTubeGrid className="show-bottom" youtubeUrls={ this.props.videoIds } />
        </div>
      )
    } else {
      return <span>Loading...</span>
    }
  }
}

function mapStateToProps(state) {
  return {
    active: state.people.active,
    videoIds: state.videos.videoIds,
    reps: state.reps
  }
}

export default connect(mapStateToProps)(Show)
