import React from 'react'
import FooterStyle, { FooterInner } from './style'
import { P } from '../typography'

const Footer = () => (
  <FooterStyle>
    <FooterInner>
      <P>© Copyright Harry Bedford 2020.<br />All rights reserved.</P>
    </FooterInner>
  </FooterStyle>
)

export default Footer
