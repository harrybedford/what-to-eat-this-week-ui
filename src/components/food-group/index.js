import React, { Fragment } from 'react'
import { string, shape } from 'prop-types'
import FoodGroupStyle from './style'
import { H2, H3 } from '../typography'
import foodSorter from '../../services/parser/foods'

const FoodGroup = ({
  name,
  data,
}) => (
  <FoodGroupStyle>
    <H2>{ name }</H2>
    <ul>
      { foodSorter(data).map(food => (food.indexOf('-') !== -1 ? <li><strong>{ food }</strong></li> : <li>{ food }</li>)) }
    </ul>
    {
      data.comingIntoSeason.length > 0 ? (
        <Fragment>
          <H3>Coming soon</H3>
          <ul className="coming-soon-list">
            { data.comingIntoSeason.map(ingredient => (<li>{ ingredient }</li>)) }
          </ul>
        </Fragment>
      ) : null
    }
  </FoodGroupStyle>
)

FoodGroup.propTypes = {
  name: string.isRequired,
  data: shape.isRequired,
}

export default FoodGroup
