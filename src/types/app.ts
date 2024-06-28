export type MovieListProps = {
  title: 'string'
  path: 'string'
  coverType: 'backdrop' | 'poster'
}

type Genre = { id: number; name: string }

type ProductionCompany = {
  id: number
  logo_path: string
  name: string
  origin_country: string
}

type ProductionCountry = {
  iso_3166_1: string
  name: string
}

type SpokenLanguage = {
  english_name: string
  iso_639_1: string
  name: string
}

export type Movie = {
  backdrop_path: string
  genres: Genre
  homepage: string
  id: number
  original_title: string
  overview: string
  popularity: number
  poster_path: number
  original_language: string
  production_companies: ProductionCompany
  production_countries: ProductionCountry
  release_date: Date
  revenue: number
  runtime: number
  spoken_languages: SpokenLanguage
  status: string
  tagline: string
  title: string
  video: boolean
  vote_average: number
  vote_count: number
}
