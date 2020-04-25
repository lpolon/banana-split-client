import React, { Fragment } from 'react'
import LoginForm from './Components/LoginForm'
import RegisterForm from './Components/RegisterForm'

export default function UnauthenticatedApp({ onSuccess }) {
  return (
    <Fragment>
      <LoginForm onSuccess={onSuccess} />
      {/* <RegisterForm setUser={setUser} /> */}
    </Fragment>
  )
}
