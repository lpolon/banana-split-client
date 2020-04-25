import React from 'react'

export default function RegisterForm({ setUser }) {
  return (
    <div>
      <h1>Register:</h1>
      <label htmlFor="username">username:</label>
      <input type="text" name="username"></input>
      <label htmlFor="password">password:</label>
      <input type="password" name="password"></input>
      {/* // TODO: SOME FETCHING */}
      <button type="submit"></button>
    </div>
  )
}
