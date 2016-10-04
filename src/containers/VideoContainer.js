import {connect} from 'react-redux'

import Videos from '../components/Videos'

const mapStateToProps = (state) => {
  return {
    videos: state.videos
  }
}

export default connect(
  mapStateToProps
)(Videos)
