import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

import { getPets, searchPets } from "../../services/pet";
import { Container } from "./styles"

import PetCard from "../PetCard"

const Feed = (props) => {
    const [pets, setPets] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const searchTerm = props.match.params.searchTerm
        const fetch = async () => {
            if (searchTerm) {
                setPets(await searchPets(searchTerm))
                setIsLoading(false)
                return
            }
            setPets(await getPets())
            setIsLoading(false)
        }
        fetch()
    }, [props.match.params.searchTerm])

    if (isLoading) {
        return (
            <Container>
                <FontAwesomeIcon icon={faSpinner} size="2x" pulse />
            </Container>
        )
    }

    if (!isLoading && !pets.length) {
        return (
            <Container>
                <h2>Nenhum pet encontrado</h2>
            </Container>
        )
    }

    return (
        <Container>
            {pets.map(pet => (
                <PetCard pet={pet} key={pet._id}/>
            ))}
        </Container>
    )
}

export default withRouter(Feed);