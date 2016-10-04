let nextWordId = 0

export const addWord = (word) => {
  return {
    type: 'ADD_WORD',
    id: nextWordId++,
    word
  }
}

export const deleteWord = (id) => {
  return {
    type: 'DELETE_WORD',
    id
  }
}

let nextImageId = 0

export const addImage = (image) => {
  return {
    type: 'ADD_IMAGE',
    id: nextImageId++,
    image
  }
}

let nextVideoId = 0

export const addVideo = (video) => {
  return {
    type: 'ADD_VIDEO',
    id: nextVideoId++,
    video
  }
}
