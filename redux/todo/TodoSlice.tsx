import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface todosInterface {
    id: number,
    status: boolean,
    text: string
}

export interface initalStoreInterface {
    todos: Array<todosInterface>,
    status: 'pending' | 'rejected' | 'fullfilled' | null,
    error: string | null
}

const initialState: initalStoreInterface = {
    todos: [],
    status: null,
    error: null
}

const toDoSlice = createSlice({
    name: 'ToDo',
    initialState: initialState,
    reducers: {
        add: (state, action: PayloadAction<todosInterface>) => {
            state.todos.push(action.payload)
        },
        status_change: (state, action: PayloadAction<todosInterface>) => {
            const otherItem = state.todos.filter((item: any) => item.id !== action.payload.id)
            state.todos = [...otherItem, action.payload]
        }
    }
})

export const { add, status_change } = toDoSlice.actions

export default toDoSlice.reducer