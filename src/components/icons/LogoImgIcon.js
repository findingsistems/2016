import React, { Component } from 'react'
import Icon from './Icon'

class LogoImgIcon extends Component {
  render() {
    return (
      <Icon originalWidth={37} originalHeight={30} {...this.props}>
        <g>
          <path fill='#7DA1C4' d='M26.365,27.207c1.895-1.918,3.066-4.555, 3.066-7.47c0-5.866-4.755-10.627-10.627
          -10.627v3.036 c4.191,0,7.592,3.402,7.592,7.592c0,4.191-3.396,7.586-7.586, 7.592h-6.079c-5.028,0-9.109-4.081
          -9.109-9.109 c0-3.377,1.833-6.316,4.56-7.889c0,0.098-0.005,0.194-0.005, 0.297c0,5.867,4.749,10.623,10.615,
          10.628l0.012-3.037 c-4.191,0-7.591-3.401-7.591-7.592c0-4.19,3.401-7.592, 7.591-7.592c3.717,0,6.802,2.655,
          7.464,6.177 c4.366,0.668,7.718,4.446,7.718,9.007C33.986,22.743,30.689, 26.497,26.365,27.207L26.365,
          27.207z M28.673,6.68 C27.112,2.762,23.28,0,18.804,0S10.502,2.763,8.935,6.68c-4.846, 1.597-8.351,6.158-8.351,
          11.539c0,6.71,5.435,12.146,12.146,12.146 h12.146c6.711,0,12.147-5.435,12.147-12.146C37.023,12.838, 33.525,
          8.278,28.673,6.68L28.673,6.68z' />
        </g>
      </Icon>
    )
  }
}
export default LogoImgIcon