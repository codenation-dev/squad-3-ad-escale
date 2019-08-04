/* eslint-disable react-hooks/exhaustive-deps */
import React from "react"
import { withRouter } from "react-router-dom"

import { Container, Image } from './styles'

const PetCard = ({ images }) => {
    return (
        <Container>
            {images.map(image => <Image image={image.url}/>)}
        </Container>
    )
}

export default withRouter(PetCard);