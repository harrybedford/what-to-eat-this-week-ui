import React from 'react'
import { H1 } from '../typography'
import HeaderStyle, { HeaderInner } from './style'

const Header = () => (
  <HeaderStyle>
    <HeaderInner>
      <H1>What to eat this week...</H1>
    </HeaderInner>
  </HeaderStyle>
)

export default Header
