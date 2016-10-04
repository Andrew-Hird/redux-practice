import React, {PropTypes} from 'react'

import Video from './Video'

const Videos = ({videos}) => (
  <div>
    {videos.map(video =>
      <Video
        key={video.id}
        {...video}
        />
    )}
  </div>
)

Videos.propTypes = {
  videos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      video: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
}

export default Videos
