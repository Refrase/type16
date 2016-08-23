// ActionsTypes

export const actionTypes = {
  READ_REQUEST: 'consume/projects/READ_REQUEST',
  READ_COMPLETE: 'consume/projects/READ_COMPLETE',
  RESET: 'consume/projects/RESET',
};

// Reducer

const initialState = {
  projects: null,
  isFetching: null,
};

export default function reducer(state = initialState, action = null) {

  const { type, payload } = action;

  switch (type) {

    case actionTypes.RESET :

      return Object.assign({}, initialState);

    case actionTypes.READ_REQUEST :

      return Object.assign({}, state, {
        isFetching: true,
      });

    case actionTypes.READ_COMPLETE :

      return Object.assign({}, state, {
        projects: payload,
        isFetching: null,
      });

    default :

      return state;

  }

}

// Actions

export function resetProjects(dispatch = null) {
  if (!dispatch) return;

  dispatch({
    type: actionTypes.RESET,
  });
}

export function getProjects(dispatch = null) {

  if (!dispatch) return ('Error: dispatch was not provided.');

  dispatch({
    type: actionTypes.READ_REQUEST,
  });

  const projectsRef = firebase.database().ref('projects'); // firebase defined in main.js

  return projectsRef
  .on( 'value', (snapshot) => {

    dispatch({
      type: actionTypes.READ_COMPLETE,
      payload: snapshot.val() || null,
    });

  }, (errorObject) => {

    console.log( `The read failed: ${errorObject.code}` );

  });

}
