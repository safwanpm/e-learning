import { configureStore } from '@reduxjs/toolkit';
import roleReducer from './slices/roleSlice';

const store = configureStore({
  reducer: {
    role: roleReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
