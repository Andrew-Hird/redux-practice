import React from 'react'
import {connect} from 'react-redux'
import {addVideo} from '../actions'

function submitVideo (e, dispatch) {
  if (e.keyCode === 13) {
    dispatch(addVideo(e.currentTarget.value))
    e.currentTarget.value = ''
  }
}

let AddVideo = ({dispatch}) => (
  <input
    placeholder="Enter a YouTube vid"
    onKeyUp={e => {
      submitVideo(e, dispatch)
    }}
    />
)

AddVideo = connect()(AddVideo)

export default AddVideo
