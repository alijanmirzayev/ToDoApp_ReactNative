import { View, Text, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function Header() {
    const data = useSelector(state => state)
    const [incomplete, setincomplete] = useState(0)
    const [complete, setcomplete] = useState(0)

    useEffect(() => {
        if (data) {
            const falseFilter = data.filter(e => e.status == false)
            setincomplete(falseFilter.length)
            const trueFilter = data.filter(e => e.status == true)
            setcomplete(trueFilter.length)
        }
    }, [data])

    return (

        <View style={styles.container}>
            <View>
                <Text style={styles.date}>March 9, 2023</Text>
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