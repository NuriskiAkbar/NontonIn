import { API_URL, TOKEN } from '@env'
import React from 'react'
import { Button, Text, View } from 'react-native'

function MovieDetail(): JSX.Element {
  const fetchData = async (): Promise<void> => {
    const ACCESS_TOKEN = TOKEN
    const url = API_URL

    console.log(url)

    if (!ACCESS_TOKEN || !url) {
      throw new Error('Env variables not set')
    }

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
      <Button title="Fetch Data" onPress={fetchData} />
    </View>
  )
}

export default MovieDetail
