import DocsActionTypes from './../constants/DocsActionTypes'

const initialState = {
  navigationTokens: [],
  tokens: [],
}

export default function(state = initialState, action) {
  if (action.type === DocsActionTypes.LOAD) {
    state.navigationTokens = action.tokens
  } else if (action.type === DocsActionTypes.LOAD_DOC) {
    state.tokens = action.tokens
  }

  return state
}
