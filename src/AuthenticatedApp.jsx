import React, { Fragment } from 'react'

export default function AuthenticatedApp({ user: { username, id }, logout }) {
  return (
    <Fragment>
      <h1>Logged In!</h1>
      <h2>username: {username}</h2>
      <h2>id: {id}</h2>
      <button onClick={logout}>logout</button>
    </Fragment>
  )
}
