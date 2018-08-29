export const FORM_UPDATED = 'FORM_UPDATED';

function modeUpdated() {
  return {
    type: FORM_UPDATED
  }
}

export function toggleMode() {
  return dispatch => {
    dispatch(modeUpdated())
  }
}