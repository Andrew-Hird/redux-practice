import React, {PropTypes} from 'react'

const Video = ({video}) => (
  <iframe src={video} />
)

Image.propTypes = {
  image: PropTypes.string.isRequired
}

export default Video
