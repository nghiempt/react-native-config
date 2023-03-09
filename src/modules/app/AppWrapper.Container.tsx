import React, {useEffect} from 'react';
import RootNavigation from '../../navigation/Navigation.Container';
import LoadingView from '../../components/Loading/LoadingView.Container';
import {useSelector} from 'react-redux';
import Toast from '../../components/Toast/ToastView.Container';

export default function AppWrapper() {
  const checkLogin = useSelector((state: any) => state.user.checkLogin);
  // const user = useSelector((state: any) => state.user.dataUser);

  useEffect(() => {
    // console.log('checkLogin: ', checkLogin);
    // console.log('user: ', user);
  });

  return (
    <>
      <RootNavigation checkLogin={checkLogin} />
      <LoadingView />
      <Toast />
    </>
  );
}
