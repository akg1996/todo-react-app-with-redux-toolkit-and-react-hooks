import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from './tasksSlice';

// you can add multiple reducer
const reducer = {
  tasks: tasksReducer
  // [reducername]: [imported reducer],
  // ...
};

const store = configureStore({
  reducer: reducer,
  devTools: true
});

export default store;
