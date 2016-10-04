import {combineReducers} from 'redux'

import words from './words'
import images from './images'
import videos from './videos'

export default combineReducers({
  words,
  images,
  videos
})
