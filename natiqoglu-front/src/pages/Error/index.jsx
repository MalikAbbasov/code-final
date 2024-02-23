import React from 'react'
import ErrorPage from '../../components/ErrorPage'
import { Helmet } from 'react-helmet-async'

function Error() {
  return (
    <div>
            <Helmet>
        <title>Natiqoglu-Error</title>
      </Helmet>
        <ErrorPage/>
    </div>
  )
}

export default Error