import React, { useState } from 'react';
import { Link, withRouter } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faSignOutAlt, faPaw, faPlusCircle, faSearch } from '@fortawesome/free-solid-svg-icons'

import { Container, Logo, SearchBar, Button, Menu, MenuIcon } from './styles';
import { isAuthenticated, logout } from '../../services/auth'

function Header({ history }) {
  const [showMenu, setShowMenu] = useState(false)

  const handleLogout = () => {
    logout()
    setShowMenu(false)
    history.push('/')
  }

  return (
    <Container>
      <Link to="/">
        <Logo>
          <FontAwesomeIcon icon={faPaw} size="2x" />
          <h1>Farejando</h1>
        </Logo>
      </Link>
      <SearchBar>
        <input type="text" placeholder="Digite o termo da busca" />
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
              <Link to="/">
                <FontAwesomeIcon icon={faUser} />
                Meus dados
              </Link>
            </li>
            <li>
              <Link to="/">
                <FontAwesomeIcon icon={faPaw} />
                Meus pets
              </Link>
            </li>
            <li>
              <Link to="/">
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
  );
}

export default withRouter(Header);