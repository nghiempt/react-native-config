export const initialState = {
  showToast: false,
  message: '',
  isError: false,
};

export const SHOW_TOAST = 'ToastState/SHOW_TOAST';
export const HIDE_TOAST = 'ToastState/HIDE_TOAST';

export function actionShowToast(message: any, isError = false) {
  return {
    type: SHOW_TOAST,
    message,
    isError,
  };
}

export function actionHideToast() {
  return {
    type: HIDE_TOAST,
  };
}

export const showToast =
  (message: string, isError = false) =>
  (
    dispatch: (arg0: {type: string; message: any; isError: boolean}) => void,
  ) => {
    if (typeof message === 'object') {
      message = 'Lỗi hệ thống. Vui lòng báo cáo với quản trị viên.';
    }
    dispatch(actionShowToast(message, isError));
  };

export const hideToast = () => (dispatch: (arg0: {type: string}) => void) => {
  dispatch(actionHideToast());
};

export default function ToastStateReducer(
  state = initialState,
  action: {type: any; message: any; isError: any},
) {
  switch (action.type) {
    case SHOW_TOAST:
      return {
        ...state,
        showToast: true,
        message: action.message,
        isError: action.isError,
      };
    case HIDE_TOAST:
      return {
        ...state,
        showToast: false,
        message: '',
        isError: false,
      };

    default:
      return state;
  }
}
