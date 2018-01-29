import React from 'react'

const NoMatch = ({ location }) => {
  return (
    <div>
      <h2 id="heading">404 error page - no route matching:</h2>
      <code> {location.pathname} </code>
    </div>
  )
}

export default NoMatch
