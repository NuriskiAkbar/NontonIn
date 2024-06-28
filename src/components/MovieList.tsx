import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Movie } from '../types/app'
import { TOKEN } from '@env'

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
})
