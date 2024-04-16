import { createContext, useEffect, useState } from 'react'

export const MoviesContext = createContext()

const MoviesProvider = ({ children }) => {
  const [movies, setMovies] = useState([])
  // const apiKey = '8f76ae02f78275336bda99299d63bf90'
  const url = 'https://api.themoviedb.org/3/movie/popular?api_key=8f76ae02f78275336bda99299d63bf90&language=es'
  const getData = async () => {
    const response = await fetch(url)
    const data = await response.json()
    const allData = data.results.map((movie) => ({ ...movie, like: false }))
    // console.log(allData)
    setMovies(allData)
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <MoviesContext.Provider value={{ movies, setMovies }}>
      {children}
    </MoviesContext.Provider>
  )
}

export default MoviesProvider
