const videos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_VIDEO':
      return [
        ...state,
        {
          id: action.id,
          video: action.video
        }
      ]

    default:
      return state
  }
}

export default videos
