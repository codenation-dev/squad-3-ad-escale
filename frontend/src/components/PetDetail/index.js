/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

import { getPet } from "../../services/pet"

import { Container } from './styles'

const PetCard = (props) => {
    const [pet, setPet] = useState()
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const fetch = async () => {
            try {
                setPet(await getPet(props.match.params.petSlug))    
            } finally {
                setIsLoading(false)
            }
        }
        fetch()
    }, [])

    if (isLoading) {
        return (
            <Container>
                <FontAwesomeIcon icon={faSpinner} size="2x" pulse />
            </Container>
        )
    }

    if (!isLoading && !pet) {
        return (
            <Container>
                <h2>Pet não encontrado :(</h2>
            </Container>
        )
    }

    return (
        <Container>
            {pet.name}
        </Container>
    )
}

export default withRouter(PetCard);