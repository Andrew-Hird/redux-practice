import {connect} from 'react-redux'
import {deleteWord} from '../actions'

import Words from '../components/Words'

const mapStateToProps = (state) => {
  return {
    words: state.words
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onDeleteClick: (id) => {
      dispatch(deleteWord(id))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Words)
