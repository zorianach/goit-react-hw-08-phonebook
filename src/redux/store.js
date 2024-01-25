import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./contactsSlice/contactsSlice";
import { filterReducer } from "./filterSlice";
import { authReducer } from "./auth/authSlice";
import persistReducer from "redux-persist/es/persistReducer";
import storage from 'redux-persist/lib/storage'
import persistStore from "redux-persist/es/persistStore";
// import persistReducer from "redux-persist/es/persistReducer";
// import persistStore from "redux-persist/es/persistStore";


const persistConfig = {
    key: 'auth',
    storage,
    whitelist: ['token'],
  }

  const persistedReducer = persistReducer (persistConfig, authReducer);

  const reducer = {
    contacts: contactsReducer,
    filter: filterReducer,
    auth: persistedReducer,
  }

  export const store = configureStore ({reducer})
// export const store = configureStore({
//     reducer: persistedReducer,
// })


export const persistor = persistStore (store);

// console.log('store', store)