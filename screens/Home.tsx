import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import Completed from '../components/Completed';
import Header from '../components/Header';
import Incomplete from '../components/Incomplete';
import FooterBottom from '../components/FooterBottom';

export default function Home() {
    return (
        <View style={styles.container}>

            <Header />
            <View style={styles.divider} />
            <Incomplete />
            <Completed />
            <FooterBottom />

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        paddingHorizontal: 16,
        paddingTop: 25
    },
    divider: {
        orderBottomWidth: 0.5,
        borderColor: '#cacaca',
        marginVertical: 16
    }
})