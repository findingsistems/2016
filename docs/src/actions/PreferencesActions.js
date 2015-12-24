import PreferencesActionTypes from './../constants/PreferencesActionTypes'

export function toggleEditor() {
  return {
    type: PreferencesActionTypes.TOGGLE_EDITOR,
  }
}
