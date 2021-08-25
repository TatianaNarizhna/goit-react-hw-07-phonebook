// import { combineReducers } from "redux";
import { configureStore,getDefaultMiddleware, combineReducers } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { 
  persistStore, 
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
 } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
// import { composeWithDevTools } from 'redux-devtools-extension';
import contactsReducer from "./reducer";


const middleware = [...getDefaultMiddleware({
  serializableCheck: {
    ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
  }
}), logger];

const contactsPersistConfig = {
  key: 'contacts',
  storage,
  blacklist: ['filter'],
}

const rootReducer = combineReducers({
  contacts: persistReducer(contactsPersistConfig, contactsReducer),
});

const store = configureStore({
    reducer: rootReducer,
    middleware,
    devTools: process.env.NODE_ENV === 'development',
});

const persistor = persistStore(store);

// eslint-disable-next-line import/no-anonymous-default-export
export default { store, persistor };



