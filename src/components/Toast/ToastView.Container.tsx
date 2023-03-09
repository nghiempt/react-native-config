import React from 'react';
import ToastView from './Toast.View';
import {useSelector, useDispatch} from 'react-redux';
import {hideToast} from './Toast.State';

export default function ToastViewContainer() {
  const dispatch = useDispatch();

  const showToast = useSelector((state: any) => state.toast.showToast);
  const message = useSelector((state: any) => state.toast.message);
  const isError = useSelector((state: any) => state.toast.isError);

  function _hideToast() {
    dispatch(hideToast());
  }

  return (
    <ToastView
      showToast={showToast}
      message={message}
      isError={isError}
      hideToast={_hideToast}
    />
  );
}
