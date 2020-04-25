import React, { useState } from 'react'

export default function LoginForm({ setUser }) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  return (
    <div>
      <form>
        <h1>Login:</h1>
        <label htmlFor="username">username:</label>
        <input type="text" name="username"></input>
        <label htmlFor="password">password:</label>
        <input type="password" name="password"></input>
        {/* TODO: some fetching here */}
        <button type="submit" onSubmit={setUser({ username, password })} />
      </form>
    </div>
  )
}
