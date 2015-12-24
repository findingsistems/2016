import PreferencesActionTypes from './../constants/PreferencesActionTypes'

const initialState = {
  showEditor: false,
}

export default function(state = initialState, action) {
  if (action.type === PreferencesActionTypes.TOGGLE_EDITOR) {
    state.showEditor = !state.showEditor
  }

  return state
}
