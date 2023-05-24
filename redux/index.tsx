import {configureStore} from '@reduxjs/toolkit'
import TodoSlice from './todo/TodoSlice'

export const store = configureStore({
    reducer: {
        todo: TodoSlice
    }
})

export type AppDispatch = typeof store.dispatch
export type StateType = ReturnType<typeof store.getState>