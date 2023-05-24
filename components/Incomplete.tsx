import CheckBox from '@react-native-community/checkbox'
import React, { useEffect, useState } from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { StateType } from '../redux'
import { add, status_change, todosInterface } from '../redux/todo/TodoSlice'

export default function Incomplete() {

  let dispatch = useDispatch()
  const { error, status, todos } = useSelector((state: StateType) => state.todo)
  const [statusTrueData, setStatusTrueData] = useState<Array<todosInterface>>([])

  useEffect(() => {
    const statusTrueDatas = todos.filter((e: any) => e.status == false)
    setStatusTrueData(statusTrueDatas)
  }, [todos])

  const handleTask = (item: any) => {
    let newItem = {
      id: item.id,
      text: item.text,
      status: true
    }
    dispatch(status_change(newItem))
  }

  const renderItem = ({ item }: any) => {
    return (
      <View style={styles.todoList}>
        <CheckBox
          value={false}
          onValueChange={() => handleTask(item)}
        />
        <Text style={{ color: 'white', fontSize: 21 }}>{item.text}</Text>
      </View>
    )
  }

  return (
    <View>
      <View>
        <Text style={styles.incomplete}>Incomplete</Text>
      </View>
      <FlatList
        data={statusTrueData}
        renderItem={renderItem}
        style={{ height: 250 }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  incomplete: {
    color: 'white',
    fontSize: 22,
    marginBottom: 8
  },
  todoList: {
    flexDirection: 'row',
    alignItems: 'center'
  }
})