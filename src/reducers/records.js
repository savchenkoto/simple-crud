import {RECORD_ADDED, RECORD_DELETED, RECORD_EDITED, RECORDS_FETCHED} from "../actions/recordsActions";

export default function records(state = [], action = {}) {
  switch (action.type) {

    case RECORD_ADDED:
      return [
        ...state,
        action.record
      ];

    case RECORD_EDITED:
      return state.map(record => {
        if (record.id === action.record.id) return action.record;
        return record;
      });

    case RECORD_DELETED:
      return state.filter(record => record.id !== action.recordId);

    case RECORDS_FETCHED:
      return action.records;

    default:
      return state;
  }
}