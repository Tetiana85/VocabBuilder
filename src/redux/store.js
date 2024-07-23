import { combineReducers, configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  persistReducer,
} from 'redux-persist';
import authSlice from './auth/auth-slice';
import dataSlice from './data/data-slice';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const dataPersistConfig = {
  key: 'data',
  storage,
  whitelist: [
    'words',
    'categories',
    'allWords',
    'statistics',
    'tasks',
    'answers',
  ],
};

const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, authSlice),
  data: persistReducer(dataPersistConfig, dataSlice),
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
