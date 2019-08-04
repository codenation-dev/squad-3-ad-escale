import React from "react";
import { withRouter } from "react-router-dom";

import { Container } from './styles'

const PetCard = ({ pet }) => {
    return (
        <Container>
            {pet.images.length && <img src={pet.images[0].url} alt={pet.name} style={{width: 500}} />}
            <div>
                <span>{pet.name}</span>
                <span>{pet.description}</span>
            </div>
        </Container>
    )
}

export default withRouter(PetCard);