import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

import { getPet } from '../../services/pet'

import PetImages from '../PetImages'

import { Container } from './styles'

const PetCard = ({ match }) => {
  const [pet, setPet] = useState()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetch = async () => {
      try {
        setPet(await getPet(match.params.petSlug))
      } finally {
        setIsLoading(false)
      }
    }
    fetch()
  }, [match.params.petSlug])

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
      <PetImages images={pet.images} />
      {pet.name}
    </Container>
  )
}

PetCard.propTypes = {
  match: PropTypes.object
}

export default withRouter(PetCard)
