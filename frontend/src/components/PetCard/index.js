import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'

import DogIcon from '../../assets/pet-icons/dog.svg'
import CatIcon from '../../assets/pet-icons/cat.svg'

import { Container, Details } from './styles'

const PetCard = ({ pet }) => {
  return (
    <Container img={pet.images[0].url}>
      <Details>
        <div>
          <p>{pet.name}</p>
          <span>Nome da raça</span>
        </div>
        {pet.specie === 'cachorro' && <img src={DogIcon} alt="Cachorro" />}
        {pet.specie === 'gato' && <img src={CatIcon} alt="Gato" />}
      </Details>
    </Container>
  )
}

PetCard.propTypes = {
  pet: PropTypes.object
}

export default withRouter(PetCard)
