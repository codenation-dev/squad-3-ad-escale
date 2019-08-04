import React, { useState } from 'react';
import { Link, withRouter } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faSignOutAlt, faPaw, faPlusCircle } from '@fortawesome/free-solid-svg-icons'

import { Container, SearchBar, Button, UserDiv, Menu } from './styles';
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
        <h1>Farejando</h1>
      </Link>
      <SearchBar placeholder="Digite o termo da busca"/>
      { !isAuthenticated() ? (
        <Link to="/login">
          <Button>Entrar</Button>
        </Link>
      ) : (
        <>
          <UserDiv onClick={() => setShowMenu(!showMenu)}>
            <FontAwesomeIcon icon={faUser} />
          </UserDiv>
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