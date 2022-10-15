import { Navbar, Nav, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const StyledLink = styled(Link)`
  padding: 5px;
  text-decoration: none;
  color: white;
  font-size: 1.3rem;
`

const Navigation = ({ user }) => {
  return(
    <Navbar collapseOnSelect expand="xxl" bg="dark" variant="dark">
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#" as="span">
              <StyledLink to="/">Home</StyledLink>
            </Nav.Link>
            <Nav.Link href="#" as="span">
              <StyledLink to="/users">Users</StyledLink>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar className="justify-content-end">
          <Nav.Link className="justify-content-end" href="#" as="span">
            {user
              ? <em>{user.name}</em>
              : <StyledLink to="/login">Login</StyledLink>
            }
          </Nav.Link>
        </Navbar>
      </Container>
    </Navbar>
  )
}

export default Navigation