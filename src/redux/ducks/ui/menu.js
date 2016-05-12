// ActionsTypes

export const actionTypes = {
  CLOSE: 'ui/menu/CLOSE',
  OPEN: 'ui/menu/OPEN',
  UPDATE_PATH: '@@router/LOCATION_CHANGE',
};

// Reducer

const initialState = {
  showingMenu: null,
};

export default function reducer(state = initialState, action = null) {

  const { type } = action;

  switch (type) {

    case actionTypes.CLOSE :

      return Object.assign({}, state, {
        showingMenu: null,
      });

    case actionTypes.OPEN :

      return Object.assign({}, state, {
        showingMenu: true,
      });

    case actionTypes.UPDATE_PATH :

      return Object.assign({}, state, {
        showingMenu: null,
      });

    default :

      return state;

  }

}

// Actions

export function openMenu(dispatch = null) {

  if (!dispatch) return console.log('Error: dispatch was not provided.');

  dispatch({
    type: actionTypes.OPEN,
  });

}

export function closeMenu(dispatch = null) {

  if (!dispatch) return console.log('Error: dispatch was not provided.');

  dispatch({
    type: actionTypes.CLOSE,
  });

}
