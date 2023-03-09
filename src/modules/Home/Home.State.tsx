import {createAction, handleActions} from 'redux-actions';

export const HomeActions: any = {};
export const HomeState = {};

const initState = {
  listCategory: [],
};

const SAVE_LIST_CATEGORY = 'SAVE_LIST_CATEGORY';
HomeActions.saveListRoom = createAction(SAVE_LIST_CATEGORY);

const RESET_HOME = 'RESET_HOME';
HomeActions.reset = createAction(RESET_HOME);

const HomeReducer = handleActions(
  {
    /* -------------------------- list category of type map ------------------------- */
    [SAVE_LIST_CATEGORY]: (state: any, action: {payload: any}) => {
      return {
        ...state,
        listRoom: action.payload,
      };
    },

    /* -------------------------- reset ------------------------- */
    [RESET_HOME]: () => {
      return initState;
    },
  },
  initState,
);

export default HomeReducer;
