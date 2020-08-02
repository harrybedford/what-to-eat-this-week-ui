import React, { Fragment } from 'react'
import { elementType, shape } from 'prop-types'
import GlobalStyle from '../global/style'
import GlobalLayout from '../global/layout'
import GlobalMeta from '../global/meta'

function App({ Component, pageProps }) {
  return (
    <Fragment>
      <GlobalMeta />
      <GlobalStyle />
      <GlobalLayout>
        <Component {...pageProps} />
      </GlobalLayout>
    </Fragment>
  )
}

App.propTypes = {
  Component: elementType.isRequired,
  pageProps: shape(),
}

App.defaultProps = {
  pageProps: {},
}

export default App
