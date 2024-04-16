import { useContext } from 'react'
import { MoviesContext } from '../context/MoviesContext'
import MyCard from '../components/MyCard'

const Favoritos = () => {
  const { movies } = useContext(MoviesContext)
  return (
    <>
      <div className='container'>
        <h1 className='text-center py-5 fs-3'>FAVORITOS</h1>
        <div className='row'>
          {movies &&
          movies.filter(movie => movie.like).map(movie => (
            <MyCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </>
  )
}

export default Favoritos
