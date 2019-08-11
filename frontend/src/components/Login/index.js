import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Link, withRouter } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

import { login, isAuthenticated } from '../../services/auth'

import { Form, Container } from './styles'

const Login = ({ history }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  if (isAuthenticated()) {
    history.push('/')
  }

  const handleLogin = async e => {
    e.preventDefault()
    if (!email || !password) {
      setError('Preencha e-mail e senha para continuar!')
      return
    }

    setIsLoading(true)

    try {
      await login(email, password)
      history.push('/')
    } catch (err) {
      if (err.response.data.message) {
        setError(err.response.data.message)
      } else {
        setError('Houve um problema com o login, verifique suas credenciais.')
      }
    }

    setIsLoading(false)
  }

  return (
    <Container>
      <Form onSubmit={handleLogin}>
        {error && <p>{error}</p>}
        <input
          type="email"
          placeholder="Endereço de e-mail"
          onChange={e => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Senha"
          onChange={e => setPassword(e.target.value)}
        />
        <button type="submit">
          {isLoading && <FontAwesomeIcon icon={faSpinner} pulse />}
          {!isLoading && <span>Entrar</span>}
        </button>
        <hr />
        <Link to="/cadastro">Cadastrar</Link>
      </Form>
    </Container>
  )
}

Login.propTypes = {
  history: PropTypes.object
}

export default withRouter(Login)
