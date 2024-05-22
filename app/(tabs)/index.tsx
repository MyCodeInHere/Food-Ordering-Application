import { View, Text } from 'react-native'
import React from 'react'
import HomeScreen from '@/components/home/homeScreen'
import { ScrollView } from 'react-native-reanimated/lib/typescript/Animated'

export default function index() {
  return (
    <View>
      <HomeScreen />
    </View>
  )
}