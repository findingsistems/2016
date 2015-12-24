import React, { Component } from 'react'
import Icon from './Icon'

class InfoIcon extends Component {
  render() {
    return (
      <Icon originalWidth={402} originalHeight={402} {...this.props}>
        <g>
          <path d='M164.454,91.363h73.098c4.945,0,9.226-1.807,12.847-5.424c3.61-3.614,5.421-7.898,5.421-12.847V18.274
            c0-4.948-1.811-9.229-5.428-12.85C246.777,1.812,242.49,0,237.544,0h-73.091c-4.946,0-9.229,1.812-12.847,5.424
            c-3.615,3.617-5.424,7.902-5.424,12.85v54.818c0,4.949,1.809,9.233,5.424,12.847C155.224,89.556,159.507,91.363,
            164.454,91.363z'/>
          <path d='M286.936,334.331c-3.613-3.617-7.897-5.427-12.847-5.427h-18.274V164.452c0-4.947-1.807-9.229-5.421
            -12.845c-3.62-3.617-7.904-5.426-12.847-5.426H127.912c-4.949,0-9.231,1.809-12.847,5.426c-3.618,3.616-5.424,
            7.898-5.424,12.845v36.547c0,4.946,1.807,9.231,5.424,12.845c3.615,3.621,7.898,5.428,12.847,5.428h18.274v
            109.633h-18.274c-4.949,0-9.231,1.81-12.847,5.427c-3.618,3.614-5.424,7.898-5.424,12.847v36.546c0,4.948,1.807,
            9.232,5.424,12.854c3.615,3.61,7.898,5.421,12.847,5.421h146.177c4.949,0,9.233-1.811,12.847-5.421c3.614-3.621,
            5.421-7.905,5.421-12.854v-36.546C292.357,342.229,290.56,337.945,286.936,334.331z' />
        </g>
      </Icon>
    )
  }
}
export default InfoIcon