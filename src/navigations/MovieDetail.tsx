import { TOKEN } from '@env'
import React, { useEffect, useState } from 'react'
import { Text, View } from 'react-native'
import { Movie } from '../types/app'

const MovieDetail = ({ route }: any): JSX.Element => {
  const { id } = route.params

  const [movie, setMovie] = useState<Movie>({})

  const [movieLists, setMovieLists] = useState<Movie[]>([])

  const getMovie = async () => {
    const url = `https://api.themoviedb.org/3/movie/${id}`
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

      setMovie(response)
    } catch (error) {
      console.log(error)
    }
  }

  const getMovieRecommendation = async () => {
    const url = `https://api.themoviedb.org/3/movie/${id}/recommendations`
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

      console.log(JSON.stringify(response, null, 2))

      setMovieLists(response)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getMovie()
    getMovieRecommendation()
  }, [])

  return (
    <View
      style={{
        display: 'flex',
        alignItems: 'center',
        marginTop: 32,
      }}
    >
      <Text style={{ fontSize: 30 }}>Movie ID: {movie.title}</Text>
    </View>
  )
}

export default MovieDetail
