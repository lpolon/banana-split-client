import React, { Fragment } from 'react'

export default function AuthenticatedApp({
  user: { username = 'NO USER AND IT SHOULD NOT HAPPEN' },
  logout,
}) {
  return (
    <Fragment>
      <h1>Logged In!</h1>
      <h2>username: {username}</h2>
      <button onClick={logout}></button>
    </Fragment>
  )
}
