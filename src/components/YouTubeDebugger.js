import React from 'react';

class YouTubeDebugger extends React.Component{
  constructor(){
    super()

    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: '1080p',
          camera: 'blah'
        }
      }
    }
  }

  handleBitrateClick = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: 12
      }
    }, () => console.log(this.state.settings))
  }

  handleResolutionClick = () => {
    const updatedVideo = {...this.state.settings.video, resolution: 720}
    const updatedSettings = {...this.state.settings, video: updatedVideo}

    this.setState({
      settings: updatedSettings
    }, () => console.log(this.state.settings))
  }

  render(){
    return(
      <div>
      <button className='bitrate' onClick={this.handleBitrateClick}>Bitrate!</button>
      <button className='resolution' onClick={this.handleResolutionClick}>Resolution!</button>
      </div>
    )
  }
}

export default YouTubeDebugger
