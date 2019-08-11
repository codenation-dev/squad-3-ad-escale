import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'

import { Container, Image } from './styles'

const PetCard = ({ images }) => {
  return (
    <Container>
      {images.map((image, index) => <Image image={image.url} key={index}/>)}
    </Container>
  )
}

PetCard.propTypes = {
  images: PropTypes.object
}

export default withRouter(PetCard)
