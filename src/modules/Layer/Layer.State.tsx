import {createAction, handleActions} from 'redux-actions';

export const LayerActions: any = {};
export const LayerState = {};

const initState = {};

const RESET_LAYER = 'RESET_LAYER';
LayerActions.reset = createAction(RESET_LAYER);

const LayerReducer = handleActions(
  {
    /* -------------------------- reset ------------------------- */
    [RESET_LAYER]: () => {
      return initState;
    },
  },
  initState,
);

export default LayerReducer;
