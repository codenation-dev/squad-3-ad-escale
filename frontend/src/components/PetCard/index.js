import React from "react"
import { withRouter } from "react-router-dom"

import { Container } from './styles'

const PetCard = ({ pet }) => {
    return (
        <Container img={pet.images[0].url}>
            <div>
                <span>{pet.name}</span>
            </div>
        </Container>
    )
}

export default withRouter(PetCard);