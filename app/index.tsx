import { StyleSheet, Text, View } from 'react-native'
import { Link } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import React from 'react'

const index = () => {
  return (
    <View style={styles.container}>
        <Text>Index page</Text>
        <StatusBar style='auto'/>
        <Link href='/profile' style={styles.link} >
            Go to Profile
        </Link>
    </View>
  )
}

export default index

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    link: {
        color: 'blue',
    }
})
