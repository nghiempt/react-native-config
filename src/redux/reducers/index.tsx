import {combineReducers} from 'redux';
import user from './UserReducer';
import home from '../../modules/Home/Home.State';
import loading from '../../components/Loading/Loading.State';
import toast from '../../components/Toast/Toast.State';
import store from '../../modules/Store/Store.State';
import layer from '../../modules/Layer/Layer.State';

const rootReducer = combineReducers({
  user,
  home,
  loading,
  toast,
  store,
  layer,
});

export default rootReducer;
