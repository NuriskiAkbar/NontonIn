import React, { useEffect, useState } from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import { Movie, MovieListProps } from '../types/app'
import { TOKEN } from '@env'
import MovieItem from './MovieItem'
const coverImageSize = {
  backdrop: {
    width: 280,
    height: 160,
  },
  poster: {
    width: 100,
    height: 160,
  },
}

function MovieList({ title, path, coverType }: MovieListProps): JSX.Element {
  const [movies, setMovies] = useState<Movie[]>([])

  const getMovies = async (): Promise<void> => {
    const url = `https://api.themoviedb.org/3/${path}`
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${TOKEN}`,
      },
    }
    try {
      const request = await fetch(url, options)
      const response = await request.json()
      console.log(response)

      setMovies(response.results)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getMovies()
  }, [])

  return (
    <View>
      <View style={styles.header}>
        <View style={styles.purplelabel}></View>
        <Text style={styles.title}>{title}</Text>
      </View>

      <FlatList
        style={{
          ...styles.movieList,
          maxHeight: coverImageSize[coverType].height,
        }}
        showsHorizontalScrollIndicator={false}
        horizontal
        data={movies}
        renderItem={({ item }) => (
          <MovieItem
            movie={item}
            coverType={coverType}
            size={coverImageSize[coverType]}
          />
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  )
}

export default MovieList

const styles = StyleSheet.create({
  header: {
    marginLeft: 16,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  purplelabel: {
    width: 20,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#8978a4',
    marginRight: 12,
  },
  title: {
    fontSize: 20,
    fontWeight: '900',
  },
  movieList: {
    paddingLeft: 4,
    marginTop: 8,
  },
})
