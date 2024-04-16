import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <Navbar expand='lg' bg='dark' data-bs-theme='dark'>
      <Container>
        <Navbar.Brand href='#home'><img className='imagen_logo' src='src/assets/images.png' /> </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ms-auto'>
            <Link className='nav-item nav-link fs-5' to='/'>HOME</Link>
            <Link className='nav-item nav-link fs-5' to='/Favoritos'>FAVORITOS</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navigation
