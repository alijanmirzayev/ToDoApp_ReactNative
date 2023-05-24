import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useSelector } from 'react-redux'
import { StateType } from '../redux'
import moment from 'moment'

export default function Header() {
    const { error, status, todos } = useSelector((state: StateType) => state.todo)
    const [incomplete, setincomplete] = useState(0)
    const [complete, setcomplete] = useState(0)

    useEffect(() => {

        const falseFilter = todos.filter(e => e.status == false)
        setincomplete(falseFilter.length)
        const trueFilter = todos.filter(e => e.status == true)
        setcomplete(trueFilter.length)

    }, [todos])

    return (

        <View style={styles.container}>
            <View>
                <Text style={styles.date}>{moment().format("MMM Do YYYY")}</Text>
            </View>
            <View>
                <Text style={styles.total}>{incomplete} incomplete, {complete} completed</Text>
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        gap: 8
    },
    date: {
        fontSize: 32,
        color: 'white'
    },
    total: {
        fontSize: 14,
        color: '#cacaca'
    }
})