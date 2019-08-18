import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Link, withRouter } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faSignOutAlt, faPaw, faPlus, faSearch, faTimes } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-regular-svg-icons'

import LogoImage from '../../assets/farejando-icon.png'
import { Container, Logo, SearchBar, Login, Menu, MenuIcon } from './styles'
import { isAuthenticated, logout } from '../../services/auth'

function Header ({ location, history }) {
  const [searchString, setSearchString] = useState('')
  const [showMenu, setShowMenu] = useState(false)
  const [showSearchBar, setShowSearchBar] = useState(false)

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

  const handleToggleSearchBar = () => {
    setShowSearchBar(!showSearchBar)
  }

  return (
    <Container>
      <Link to="/">
        <Logo>
          <img src={LogoImage} alt="Farejando"/>
          <h1>Farejando</h1>
        </Logo>
      </Link>
      <SearchBar open={showSearchBar}>
        <div>
          <input type="text" placeholder="Buscar..." value={searchString} onChange={(e) => handleChangeSearchString(e.target.value)}/>
          {!showSearchBar && <FontAwesomeIcon icon={faSearch} size="lg" onClick={handleToggleSearchBar}/>}
          {showSearchBar && <FontAwesomeIcon icon={faTimes} onClick={handleToggleSearchBar}/>}
        </div>
      </SearchBar>
      { !isAuthenticated() ? (
        <Link to="/login">
          <Login>
            <FontAwesomeIcon icon={faUser} />
            Entrar
          </Login>
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
              <Link to="/" onClick={() => setShowMenu(false)}>
                <FontAwesomeIcon icon={faHome} />
                Início
              </Link>
            </li>
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
                <FontAwesomeIcon icon={faPlus} />
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
