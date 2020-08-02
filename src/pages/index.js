import React from 'react'
import { shape } from 'prop-types'
import FoodGroup from '../components/food-group'
import { Container } from '../components/layout'

async function getData() {
  const url = `http://localhost:8080`
  const res = await fetch(url)
  return res.json()
}

const Homepage = ({
  data: {
    meat,
    fish,
    vegetables,
    fruit,
    herbs,
    spices,
  },
}) => (
  <Container>
    <FoodGroup name="Meat" data={meat} />
    <FoodGroup name="Fish &amp; Seafood" data={fish} />
    <FoodGroup name="Vegetables" data={vegetables} />
    <FoodGroup name="Fruit" data={fruit} />
    <FoodGroup name="Herbs" data={herbs} />
    <FoodGroup name="Spices" data={spices} />
  </Container>
)

Homepage.propTypes = {
  data: shape().isRequired,
}

export async function getServerSideProps() {
  try {
    const res = await getData()
    return ({ props: { data: res } })
  } catch (error) {
    return ({ props: { error: true } })
  }
}

export default Homepage
