/*
 * @Author: tiero 
 * @Date: 2017-01-05 17:39:05 
 * @Last Modified by: tiero
 * @Last Modified time: 2017-01-05 17:40:19
 */
import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { requireNativeComponent, Image } from 'react-native'


class PanoramaView extends Component {

  _onEnd = (event) => {
      if (!this.props.onEnd) {
      return;
  }
  this.props.onEnd(event.nativeEvent)
  }

  render() {

    const nativeProps = {
      ...this.props,
      onEnd: this._onEnd,
    }

    return <RCTPanoramaView {...nativeProps} />
  }
}

PanoramaView.propTypes = {
  image: Image.propTypes.source,
  imageUrl: PropTypes.string,
  displayMode: PropTypes.string,
  enableFullscreenButton: PropTypes.bool,
  enableCardboardButton: PropTypes.bool,
  enableInfoButton: PropTypes.bool,
  enableTouchTracking: PropTypes.bool,
  hidesTransitionView: PropTypes.bool,
  onEnd: PropTypes.func,
}

// requireNativeComponent automatically resolves this to "PanoramaManager"
var RCTPanoramaView = requireNativeComponent('Panorama', PanoramaView);
export default PanoramaView;
