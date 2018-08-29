export const RECORDS_FETCHED = 'RECORDS_FETCHED';
export const RECORD_ADDED = 'RECORD_ADDED';
export const RECORD_EDITED = 'RECORD_EDITED';
export const RECORD_DELETED = 'RECORD_DELETED';
const URL = '  http://localhost:3010/users';

export function recordsFetched(records) {
  return {
    type: RECORDS_FETCHED,
    records
  }
}

export function recordAdded(record) {
  return {
    type: RECORD_ADDED,
    record
  }
}

export function recordUpdated(record) {
  return {
    type: RECORD_EDITED,
    record
  }
}

function recordDeleted(recordId) {
  return {
    type: RECORD_DELETED,
    recordId
  }
}

export function fetchRecords() {
  return dispatch => {
    fetch(URL)
      .then(res => res.json())
      .then(data => dispatch(recordsFetched(data)));
  }
}

function handleResponse(response) {
  if (response && response.ok) {
    return response.json();
  }
  return {}
}

export function newRecord(data) {
  return dispatch => {
    return fetch(URL, {
      method: 'post',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(handleResponse)
      .then(data => dispatch(recordAdded(data)));
  }
}

export function saveRecord(data) {
  return dispatch => {
    return fetch(URL + '/' + data.id, {
      method: 'put',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(handleResponse)
      .then(() => dispatch(recordUpdated(data)));
  }
}

export function deleteRecord(id) {
  return dispatch => {
    return fetch(URL + '/' + id, {
      method: 'delete',
    }).then(handleResponse)
      .then(() => dispatch(recordDeleted(id)));
  }
}