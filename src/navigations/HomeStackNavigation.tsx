import { ParamListBase } from '@react-navigation/native'
import React from 'react'
import { Button, Text, View } from 'react-native'
import { NativeStackScreenProps } from 'react-native-screens/lib/typescript/native-stack/types'

function HomeStackNavigation({
  navigation,
}: NativeStackScreenProps<ParamListBase, 'HomeStack'>): JSX.Element {
  return (
    <View>
      <Text>HomeStackNavigation</Text>
      <Button
        title="Pergi ke Movie Detail"
        onPress={() => navigation.navigate('MovieDetail')}
      />
    </View>
  )
}

export default HomeStackNavigation
