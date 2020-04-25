import React, { Fragment } from 'react'
import LoginForm from './Components/LoginForm'
import RegisterForm from './Components/RegisterForm'

export default function UnauthenticatedApp({ setUser }) {
  return (
    <Fragment>
      <LoginForm setUser={setUser} />
      <RegisterForm setUser={setUser} />
    </Fragment>
  )
}
