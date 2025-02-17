import { Text, View } from 'react-native'
import { Link } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import React from 'react'

const index = () => {
  return (
    <View className='flex-1 items-center justify-center bg-white'>
        <Text>Index page</Text>
        <StatusBar style='auto'/>
        <Link href='/profile' style={{ color: 'blue' }} >
            Go to Profile
        </Link>
    </View>
  )
}

export default index
