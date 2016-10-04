import React, {PropTypes} from 'react'

import Word from './Word'

const Words = ({words, onDeleteClick}) => (
  <div>
    {words.map(word =>
      <Word
        key={word.id}
        {...word}
        onClick={() => onDeleteClick(word.id)}
        />
    )}
  </div>
)

Words.propTypes = {
  words: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      word: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  onDeleteClick: PropTypes.func.isRequired
}

export default Words
