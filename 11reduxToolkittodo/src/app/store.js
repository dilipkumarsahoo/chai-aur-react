import {configureStore} from '@reduxjs/toolkit';

import todoReducer from '../features/todo/todoSlice'
//step-1 configure store

export const store = configureStore({
    reducer: todoReducer
})