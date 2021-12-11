import rootReducer from './root-reducer';
import { createStore,applyMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { persistStore,persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig= {
  key:'persist-key',
  storage
}

const persistedReducer = persistReducer(persistConfig,rootReducer)
export const store = createStore(persistedReducer,applyMiddleware(thunk))
const persistor=persistStore(store)

export {persistor}
// import { configureStore } from "@reduxjs/toolkit";
// import basketReducer from "../slices/basketSlice";




// export const store = configureStore({
//   reducer: {
//     basket: basketReducer,
//   },
// });








