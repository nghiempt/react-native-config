import {createAction, handleActions} from 'redux-actions';

export const StoreActions: any = {};
export const StoreState = {};

const initState = {
  listStore: [],
  listTyle: [],
  userLocation: [],
};

const SAVE_USER_LOCATION = 'SAVE_USER_LOCATION';
StoreActions.saveUserLocation = createAction(SAVE_USER_LOCATION);

const SAVE_LIST_STORE = 'SAVE_LIST_STORE';
StoreActions.saveListStore = createAction(SAVE_LIST_STORE);

const SAVE_LIST_TYLE = 'SAVE_LIST_TYLE';
StoreActions.saveListTyle = createAction(SAVE_LIST_TYLE);

const RESET_STORE = 'RESET_STORE';
StoreActions.reset = createAction(RESET_STORE);

const StoreReducer = handleActions(
  {
    [SAVE_USER_LOCATION]: (state, action) => {
      return {
        ...state,
        userLocation: action.payload,
      };
    },
    
    [SAVE_LIST_TYLE]: (state, action) => {
      return {
        ...state,
        listTyle: action.payload,
      };
    },

    [SAVE_LIST_STORE]: (state, action) => {
      return {
        ...state,
        listStore: action.payload,
      };
    },

    [RESET_STORE]: () => {
      return initState;
    },
  },
  initState,
);

export default StoreReducer;
