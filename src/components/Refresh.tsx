import React from 'react';
import {RefreshControl} from 'react-native';

export default function Refresh({handleRefresh}: {handleRefresh: any}) {
  return (
    <RefreshControl
      refreshing={false}
      onRefresh={() => {
        handleRefresh();
      }}
    />
  );
}
