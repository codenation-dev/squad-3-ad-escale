import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Link, withRouter } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faSignOutAlt, faPaw, faPlusCircle, faSearch } from '@fortawesome/free-solid-svg-icons'

import LogoImage from '../../assets/farejando.png'
import { Container, Logo, SearchBar, Button, Menu, MenuIcon } from './styles'
import { isAuthenticated, logout } from '../../services/auth'

function Header ({ location, history }) {
  const [searchString, setSearchString] = useState('')
  const [showMenu, setShowMenu] = useState(false)

  useEffect(() => {
    if (location.pathname.includes('/busca/')) {
      setSearchString(location.pathname.replace('/busca/', ''))
    }
  }, [location.pathname])

  const handleChangeSearchString = (value) => {
    setSearchString(value)
    if (value === '') {
      history.push('/')
    } else {
      history.push(`/busca/${value}`)
    }
  }

  const handleLogout = () => {
    logout()
    setShowMenu(false)
    history.push('/')
  }

  return (
    <Container>
      <Link to="/">
        <Logo>
          <img src={LogoImage} alt="Farejando"/>
          <h1>Farejando</h1>
        </Logo>
      </Link>
      <SearchBar>
        <input type="text" placeholder="Buscar..." value={searchString} onChange={(e) => handleChangeSearchString(e.target.value)}/>
        <FontAwesomeIcon icon={faSearch} />
      </SearchBar>
      { !isAuthenticated() ? (
        <Link to="/login">
          <Button>Entrar</Button>
        </Link>
      ) : (
        <>
          <MenuIcon open={showMenu} onClick={() => setShowMenu(!showMenu)}>
            <span></span>
            <span></span>
            <span></span>
          </MenuIcon>
          { <Menu show={showMenu}>
            <li>
              <Link to="/meus-dados" onClick={() => setShowMenu(false)}>
                <FontAwesomeIcon icon={faUser} />
                Meus dados
              </Link>
            </li>
            <li>
              <Link to="/meus-pets" onClick={() => setShowMenu(false)}>
                <FontAwesomeIcon icon={faPaw} />
                Meus pets
              </Link>
            </li>
            <li>
              <Link to="/pets/cadastrar" onClick={() => setShowMenu(false)}>
                <FontAwesomeIcon icon={faPlusCircle} />
                Cadastrar pet
              </Link>
            </li>
            <li onClick={handleLogout}>
              <FontAwesomeIcon icon={faSignOutAlt} />
              Sair
            </li>
          </Menu> }
        </>
      ) }
    </Container>
  )
}

Header.propTypes = {
  location: PropTypes.object,
  history: PropTypes.object
}

export default withRouter(Header)
