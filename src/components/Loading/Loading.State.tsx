export const initialState = {
  isloading: false,
};

export const ACTION_LOADING_START = 'LoadingState/ACTION_LOADING_START';
export const ACTION_LOADING_STOP = 'LoadingState/ACTION_LOADING_STOP';

export function actionLoadingStart() {
  return {
    type: ACTION_LOADING_START,
  };
}

export function actionLoadingStop() {
  return {
    type: ACTION_LOADING_STOP,
  };
}

export function startLoading() {
  return (dispatch: (arg0: {type: string}) => void) => {
    dispatch(actionLoadingStart());
  };
}

export function stopLoading() {
  return (dispatch: (arg0: {type: string}) => void) => {
    dispatch(actionLoadingStop());
  };
}

export default function StateReducer(
  state = initialState,
  action: {type: any},
) {
  switch (action.type) {
    case ACTION_LOADING_START:
      return {
        ...state,
        isloading: true,
      };
    case ACTION_LOADING_STOP:
      return {
        ...state,
        isloading: false,
      };
    default:
      return state;
  }
}
