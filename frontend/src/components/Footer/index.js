import React from 'react'
import { withRouter } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'

import LogoImage from '../../assets/farejando-icon-white.png'
import { Container, Logo, Social } from './styles'

function Header () {
  return (
    <Container>
      <Logo>
        <img src={LogoImage} alt="Farejando"/>
        <h1>Farejando</h1>
      </Logo>
      <Social>
        <a href="#">
          <FontAwesomeIcon icon={faFacebook} size="lg" />
        </a>
        <a href="#">
          <FontAwesomeIcon icon={faInstagram} size="lg" />
        </a>
        <a href="#">
          <FontAwesomeIcon icon={faTwitter} size="lg" />
        </a>
      </Social>
    </Container>
  )
}

export default withRouter(Header)
