import React, { useState, useEffect } from "react"
import { withRouter } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

import { getUser, updateUser } from '../../services/user'

import { Container, Save } from './styles'

const User = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(false)
    const [success, setSuccess] = useState(false)

    useEffect(() => {
        const fetch = async () => {
            const user = await getUser()
            setName(user.name)
            setEmail(user.email)
            setPhoneNumber(user.phoneNumber)
        }
        fetch()
    }, [])

    const handleUpdateUser = async () => {
        setIsLoading(true)
        setSuccess(false)
        setError(false)
        try {
            await updateUser(name, phoneNumber)
            setSuccess(true)
        } catch (err) {
            setError()
        }
        setIsLoading(false)
    }

    return (
        <Container>
            {success && <p className="success">Cadastro atualizado!</p>}
            {error && <p className="error">Ocorreu um erro ao atualizar os dados</p>}
            <div>
                <label>Nome</label>
                <input type="text" value={name} onChange={e => setName(e.target.value)}/>
            </div>
            <div>
                <label>Email</label>
                <input type="text" value={email} disabled/>
            </div>
            <div>
                <label>Telefone</label>
                <input type="text" value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)}/>
            </div>
            <Save onClick={handleUpdateUser}>
                {!isLoading && 'Salvar'}
                {isLoading && <FontAwesomeIcon icon={faSpinner} pulse />}
            </Save>
        </Container>
    )
}

export default withRouter(User);