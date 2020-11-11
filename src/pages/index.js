import React, { useEffect } from 'react'
import { shape } from 'prop-types'
import FoodGroup from '../components/food-group'
import { Container } from '../components/layout'
import { getData } from '../services/fetch'

const Homepage = () => {
  useEffect(() => {
    const date = new Date()
    const month = date.getMonth
    console.log(month)
  })
  return (data ? (
    <Container>
      <FoodGroup name="Meat" data={data.meat} />
      <FoodGroup name="Fish &amp; Seafood" data={data.fish} />
      <FoodGroup name="Vegetables" data={data.vegetables} />
      <FoodGroup name="Fruit" data={data.fruit} />
      <FoodGroup name="Herbs" data={data.herbs} />
      <FoodGroup name="Spices" data={data.spices} />
    </Container>
  ) : 'There appears to be a problem, try again later')
}

Homepage.propTypes = {
  data: shape().isRequired,
}

export default Homepage
