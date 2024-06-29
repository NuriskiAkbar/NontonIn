import { ParamListBase } from '@react-navigation/native'
import React from 'react'
import { ScrollView, StatusBar, StyleSheet, View } from 'react-native'
import { NativeStackScreenProps } from 'react-native-screens/lib/typescript/native-stack/types'
import { MovieListProps } from '../types/app'
import MovieList from '../components/MovieList'

function HomeStackNavigation(): JSX.Element {
  const movieLists: MovieListProps[] = [
    {
      title: 'Now Playing in Theater',
      path: 'movie/now_playing?language=en-US&page=1',
      coverType: 'backdrop',
    },
    {
      title: 'Upcoming Movies',
      path: 'movie/upcoming?language=en-US&page=1',
      coverType: 'poster',
    },
    {
      title: 'Top Rated Movies',
      path: 'movie/top_rated?language=en-US&page=1',
      coverType: 'poster',
    },
    {
      title: 'Popular Movies',
      path: 'movie/popular?language=en-US&page=1',
      coverType: 'poster',
    },
  ]

  return (
    <ScrollView>
      <View style={styles.container}>
        {movieLists.map((movie, index) => (
          <MovieList
            title={movie.title}
            path={movie.path}
            coverType={movie.coverType}
            key={index}
          />
        ))}
        <StatusBar translucent={false} />
      </View>
    </ScrollView>
  )
}

export default HomeStackNavigation

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight ?? 32,
    alignItems: 'center',
    justifyContent: 'center',
    rowGap: 16,
  },
})
