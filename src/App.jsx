import { Route, Routes } from 'react-router-dom'
import Navigation from './components/Navigation'
import { Home, Favoritos, NotFound } from './views'

const App = () => {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Favoritos' element={<Favoritos />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
