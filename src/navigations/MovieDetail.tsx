import { ParamListBase } from '@react-navigation/native'
import React from 'react'
import { Button, Text, View } from 'react-native'
import { NativeStackScreenProps } from 'react-native-screens/lib/typescript/native-stack/types'

function MovieDetail({
  navigation,
}: NativeStackScreenProps<ParamListBase, 'MovieDetail'>): JSX.Element {
  return (
    <View>
      <Text>MovieDetail</Text>
      <Button
        title="Kembali ke Home"
        onPress={() => navigation.navigate('HomeStack')}
      />
    </View>
  )
}

export default MovieDetail
