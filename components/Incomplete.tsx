import { View, Text, ScrollView, StyleSheet, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import CheckBox from '@react-native-community/checkbox'
import { useDispatch, useSelector } from 'react-redux'

export default function Incomplete() {

  let dispatch = useDispatch()
  const data = useSelector(state => state)
  const [statusTrueData, setStatusTrueData] = useState([])

  useEffect(() => {
      const statusTrueData = data?.filter((e: any) => e.status == false)
      setStatusTrueData(statusTrueData)
  }, [data])

  const handleTask = (item: any) => {
    let newItem = {
      id: item.id,
      text: item.text,
      status: true
    }
    dispatch({ type: 'STATUS_CHANGE', payload: newItem })
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