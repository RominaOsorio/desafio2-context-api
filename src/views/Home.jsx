import { useContext } from 'react'
import { MoviesContext } from '../context/MoviesContext'
import MyCard from '../components/MyCard'

const Home = () => {
  const { movies } = useContext(MoviesContext)
  return (
    <>
      <img className='imagen_home' src='src/assets/images2.jpg' alt='wallpaper peliculas' />
      <div className='container'>
        <div className='row'>
          {movies && movies.map(movie => (
            <MyCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </>
  )
}

export default Home
