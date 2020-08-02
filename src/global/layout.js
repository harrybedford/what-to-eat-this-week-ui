import React, { Fragment } from 'react'
import { node } from 'prop-types'
import Header from '../components/header'
import Footer from '../components/footer'
// import SideMenu from '../../components/side-menu'

const GlobalLayout = ({
  children,
}) => (
  <Fragment>
    <Header />
    {/* <SideMenu
      open={sideMenuOpen}
      setSideMenuOpen={setSideMenuOpen}
    /> */}
    { children }
    <Footer />
  </Fragment>
)

GlobalLayout.propTypes = {
  children: node.isRequired,
}

export default GlobalLayout
