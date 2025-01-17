import Card from 'react-bootstrap/Card'
import { useContext } from 'react'
import { MoviesContext } from '../context/MoviesContext'

const MyCard = ({ movie }) => {
  const imagePath = 'https://image.tmdb.org/t/p/original/'

  const { movies, setMovies } = useContext(MoviesContext)
  const addAndRemoveFavorites = (id) => {
    const newMovies = movies.map(movie => {
      if (movie.id === id) {
        return {
          ...movie,
          like: !movie.like
        }
      }
      return movie
    })
    setMovies(newMovies)
  }
  return (
    <div className='col-md-3 mt-5'>
      <Card>
        <Card.Img variant='top' src={`${imagePath + movie.poster_path}`} height={350} />
        <Card.Body className='text-center'>
          <Card.Title className='fs-6'>{movie.title}</Card.Title>
          <span onClick={() => addAndRemoveFavorites(movie.id)}>
            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' width='30px'><path fill={movie.like ? 'red' : 'gray'} d='M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z' /></svg>
          </span>
        </Card.Body>
      </Card>
    </div>
  )
}

export default MyCard
