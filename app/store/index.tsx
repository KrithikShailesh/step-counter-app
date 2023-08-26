import AsyncStorage from '@react-native-async-storage/async-storage';
import rootReducers from '../reducers';
import { applyMiddleware, createStore } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
import hardSet from 'redux-persist/lib/stateReconciler/hardSet';
/**
 * Redux Setting
 */
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  stateReconciler: hardSet,
  timeout: 10
};

let middleware = [thunk];
// if (__DEV__) {
// middleware.push(logger);
// }


const persistedReducer = persistReducer(persistConfig, rootReducers);
const store = createStore(persistedReducer, applyMiddleware(...middleware));
const persistor = persistStore(store);

export { store, persistor };
