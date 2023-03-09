import React from 'react';
import {useSelector} from 'react-redux';
import LoadingView from './Loading.View';

export default function LoadingViewContainer() {
  const isloading = useSelector((state: any) => state.loading.isloading);
  return <LoadingView loading={isloading} />;
}
