import React, { Fragment } from 'react'
import { string, shape } from 'prop-types'
import FoodGroupStyle from './style'
import { H2, H3 } from '../typography'

const FoodGroup = ({
  name,
  data,
}) => (
  <FoodGroupStyle>
    <H2>{ name }</H2>
    {
      data.newInSeason.length > 0 ? (
        <Fragment>
          <H3>New in season...</H3>
          <ul>
            { data.newInSeason.map(ingredient => (<li>{ ingredient }</li>)) }
          </ul>
        </Fragment>
      ) : null
    }
    {
      data.comingIntoSeason.length > 0 ? (
        <Fragment>
          <H3>Coming into season...</H3>
          <ul>
            { data.comingIntoSeason.map(ingredient => (<li>{ ingredient }</li>)) }
          </ul>
        </Fragment>
      ) : null
    }
    {
      data.lastChanceFor.length > 0 ? (
        <Fragment>
          <H3>Last chance for...</H3>
          <ul>
            { data.lastChanceFor.map(ingredient => (<li>{ ingredient }</li>)) }
          </ul>
        </Fragment>
      ) : null
    }
    {
      data.makeTheMostOf.length > 0 ? (
        <Fragment>
          <H3>Make the most of...</H3>
          <ul>
            { data.makeTheMostOf.map(ingredient => (<li>{ ingredient }</li>)) }
          </ul>
        </Fragment>
      ) : null
    }
    <H3>All in season...</H3>
    <ul>
      { data.inSeason.map(ingredient => (<li>{ ingredient }</li>)) }
    </ul>
  </FoodGroupStyle>
)

FoodGroup.propTypes = {
  name: string.isRequired,
  data: shape.isRequired,
}

export default FoodGroup
