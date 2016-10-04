import React from 'react'

import AddWord from './AddWord'
import AddImage from './AddImage'
import AddVideo from './AddVideo'
import WordsContainer from '../containers/WordsContainer'
import ImageContainer from '../containers/ImageContainer'
import VideoContainer from '../containers/VideoContainer'


const App = () => (
  <div className='app-container'>
    <WordsContainer />
    <AddWord />
    <ImageContainer />
    <AddImage />
    <VideoContainer />
    <AddVideo />
  </div>
)

export default App
