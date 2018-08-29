import {FORM_UPDATED} from "../actions/formActions";


export default function isEditModeOn(state=false, action={}) {
  switch(action.type) {
    case FORM_UPDATED:
      return !state;
    default:
      return state;
  }
}