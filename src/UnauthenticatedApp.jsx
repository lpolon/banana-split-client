import React, { Fragment } from 'react'
import LoginForm from './Components/LoginForm'

export default function UnauthenticatedApp({ onSuccess }) {
  return (
    <Fragment>
      <LoginForm onSuccess={onSuccess} />
    </Fragment>
  )
}
