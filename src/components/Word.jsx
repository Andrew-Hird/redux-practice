import React, {PropTypes} from 'react'

const Word = ({word, onClick}) => (
  <div>
    {word}
    <button onClick={onClick}></button>
  </div>
)

Word.propTypes = {
  word: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Word
