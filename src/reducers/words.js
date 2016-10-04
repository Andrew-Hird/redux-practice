const words = (state = [
  // {id: 0, word: 'foo'},
  // {id: 1, word: 'bar'},
  // {id: 2, word: 'wombat'}
], action) => {
  switch (action.type) {
    case 'ADD_WORD':
      return [
        ...state, {
          id: action.id,
          word: action.word
        }
      ]
      break

    case 'DELETE_WORD':
      return state.filter(word => word.id !== action.id)
      break

    default:
      return state
  }
}

export default words
