import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; 
import { combineReducers } from "redux";
import jobSlice from "./jobSlice";

const rootReducer = combineReducers({
    job: jobSlice,
});

// Persist configuration
const persistConfig = {
    key: "root",
    storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure the store with the persisted reducer
const store = configureStore({
    reducer: persistedReducer,
});

// Created a persistor
const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;

export { store, persistor };