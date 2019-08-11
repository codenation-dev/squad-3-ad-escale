import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { withRouter, Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

import { getPets, searchPets } from '../../services/pet'
import { Container } from './styles'

import PetCard from '../PetCard'

const Feed = ({ match }) => {
  const [pets, setPets] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const searchTerm = match.params.searchTerm
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
  }, [])

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
        <Link to={`/pets/${pet.slug}`} key={pet._id}>
          <PetCard pet={pet} />
        </Link>
      ))}
    </Container>
  )
}

Feed.propTypes = {
  match: PropTypes.Object
}

export default withRouter(Feed)
