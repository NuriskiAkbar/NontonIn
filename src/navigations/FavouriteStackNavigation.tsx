import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Favourite from '../screens/Favourite'
import MovieDetail from '../screens/MovieDetail'

const Stack = createNativeStackNavigator()

export default function HomeStackNavigation(): JSX.Element {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="StackFavorite"
        component={Favourite}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="MovieDetail" component={MovieDetail} />
    </Stack.Navigator>
  )
}