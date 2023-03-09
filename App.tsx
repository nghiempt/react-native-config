import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/lib/integration/react';
import {configureStore, persistor} from './src/redux/store/configureStore';
import AppWrapper from './src/modules/app/AppWrapper.Container';

class App extends Component {
  render() {
    return (
      <Provider store={configureStore}>
        <PersistGate persistor={persistor}>
          <AppWrapper />
        </PersistGate>
      </Provider>
    );
  }
}

export default App;
