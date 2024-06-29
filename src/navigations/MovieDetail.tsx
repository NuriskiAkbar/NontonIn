import React from 'react'
import { Button, Text, View } from 'react-native'

function MovieDetail(): JSX.Element {
  const fetchData = async (): Promise<void> => {
    const ACCESS_TOKEN =
      'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZmZkZDE1Mjg2ZDE5ZGFjMDQ2ODhhYTI2ZWNlZTdhYyIsIm5iZiI6MTcxOTU3NjI3MC4xNjgxNTYsInN1YiI6IjYzNjRlYTlhOWQ2ZTMzMDA4YWRhZTAzNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.CYxaTfukO8sCHT3Q29VBS06rXxayIMBxBSQ3QAmfi1Y'

    const url =
      'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1'

    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
    }
    try {
      const request = await fetch(url, options)
      const response = await request.json()
      console.log(JSON.stringify(response, null, '\t'))
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Movie Detail Page</Text>
      <Button
        title="Fetch Data"
        onPress={() => {
          fetchData()
        }}
      />
    </View>
  )
}

export default MovieDetail
