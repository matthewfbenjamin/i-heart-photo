import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Actions as routerActions } from 'react-native-router-flux'
import { bindActionCreators } from 'redux'
import autobind from 'class-autobind'
import { Dimensions } from 'react-native'

import Main from './main'
import { actions } from '../../data'
class Container extends Component {
  constructor(props) {
    super(props);
    autobind(this);
    this.state = {
      swipedAllCards: false,
      localDislikeCount: 0,
      localLikeCount: 0,

    }
  }

  componentDidMount () {
    // Get the initial 20 photos to swipe on
    this.props.dataActions.getPhotos(this.props.photoPage, this.props.photosPerPage)
    // If I persisted the data, this would be a neccessary line
    if (this.props.likeCount > 0 || this.props.dislikeCount > 0) this.setState({ localDislikeCount: this.props.dislikeCount, localLikeCount: this.props.likeCount })
  }

  handleYup(cardId) {
    this.props.dataActions.likePhoto(cardId, this.state.localLikeCount++)
  }
  handleNope(cardId) {
    this.props.dataActions.likePhoto(cardId, this.state.localDislikeCount++)
  }

  cardRemoved(idx) {
    // set to this.props.photosPerPage * this.props.photoPage -1 so it makes the call when there is still 1 card left
    if (idx + 1 === this.props.photosPerPage * this.props.photoPage -1) {
      this.props.dataActions.getPhotos(this.props.photoPage++, this.props.photosPerPage)
    }
  }
  
  render () {
    return (
      <Main
        dimensions={Dimensions.get('window')}
        {...this.props}
        {...this.state}
        handleYup={this.handleYup}
        handleNope={this.handleNope}
        cardRemoved={this.cardRemoved}
      />
    );
  }
}

const mapStateToProps = state => {
  return {...state}
}

function mapDispatchToProps(dispatch) {
  return {
    dataActions: bindActionCreators(actions, dispatch),
    dispatch: dispatch,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Container);