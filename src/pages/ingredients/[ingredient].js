import React from 'react'
import { useRouter } from 'next/router'
import { shape, string } from 'prop-types'
import { Container } from '../../components/layout'

const Ingredient = ({
  name,
  data,
}) => (
  <Container>
    <h1>{ name }</h1>
    <p>{ data.description }</p>
  </Container>
)

Ingredient.propTypes = {
  name: string.isRequired,
  data: shape().isRequired,
}

export async function getStaticProps({ params }) {
  const name = params.ingredient
  const data = {
    description: '',
  }
  return {
    props: {
      name,
      data,
    },
  }
}

export async function getStaticPaths() {
  const ingredients = [{ name: 'apple' }]
  const paths = ingredients.map(ingredient => `/ingredients/${ingredient.name}`)
  return { paths, fallback: false }
}

export default Ingredient

