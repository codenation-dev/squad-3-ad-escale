import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

import { Form, Container } from "./styles";
import api from "../../services/api";

const Register = (props) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(false)
  
    const handleRegister = async e => {
        e.preventDefault()
        
        if (!name || !email || !password || !confirmPassword) {
            setError("Preencha todos os dados para se cadastrar")
            return;
        }

        if (password !== confirmPassword) {
            setError("As senhas não coincidem")
            return;
        }

        setIsLoading(true)
        try {
            await api.post("/users", { name, email, password, confirm_password: confirmPassword })
            props.history.push("/")
        } catch (err) {
            setError("Ocorreu um erro ao se cadastrar")
        }
        setIsLoading(false)
    }

    return (
        <Container>
            <Form onSubmit={handleRegister}>
                {error && <p>{error}</p>}
                <input
                    type="text"
                    placeholder="Nome"
                    onChange={e => setName(e.target.value)}
                />
                <input
                    type="email"
                    placeholder="E-mail"
                    onChange={e => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Senha"
                    onChange={e => setPassword(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Confirmar senha"
                    onChange={e => setConfirmPassword(e.target.value)}
                />
                <button type="submit">
                    {isLoading && <FontAwesomeIcon icon={faSpinner} pulse />}
                    {!isLoading && <span>Cadastrar</span>}
                </button>
                <hr />
                <Link to="/login">Fazer login</Link>
            </Form>
        </Container>
    )
}

export default withRouter(Register);