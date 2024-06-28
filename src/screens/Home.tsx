import React from 'react'
import { Text, View } from 'react-native'
import HomeStackNavigation from '../navigations/HomeStackNavigation'
import { NativeStackScreenProps } from 'react-native-screens/lib/typescript/native-stack/types'
import { ParamListBase } from '@react-navigation/native'

function Home(
  props: NativeStackScreenProps<ParamListBase, 'Home'>,
): JSX.Element {
  return (
    <View>
      <HomeStackNavigation {...props} />
    </View>
  )
}

export default Home
