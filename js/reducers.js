import { ADD_OMDB_DATA, SET_SEARCH_TERM } from './actions'

const DEFAULT_STATE = {
  searchTerm: '',
  omdbData: {}
}

const addOMDBData = (state, action) => {
  const newOMDBData = {}
  Object.assign(newOMDBData, state.omdbData, {[action.imdbID]: action.omdbData})
  const newState = {}
  Object.assign(newState, state, {omdbData: newOMDBData})
  return newState
}

const setSearchTerm = (state, action) => {
  const newState = {}
  Object.assign(newState, state, {searchTerm: action.searchTerm})
  return newState
}

const rootReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case ADD_OMDB_DATA:
      return addOMDBData(state, action)
		case SET_SEARCH_TERM:
			return setSearchTerm(state, action)
    default:
      return state
  }
}

export default rootReducer
