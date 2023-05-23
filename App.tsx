import { View, Text } from 'react-native'
import React from 'react'
import Home from './screens/Home'
import { createStore } from 'redux'
import { ToDoReducer } from './redux/ToDoReducer'
import { Provider } from 'react-redux'

const store = createStore(ToDoReducer)

export default function App() {
  return (
    <Provider store={store}>
      <>
        <Home />
      </>
    </Provider>
  )
}