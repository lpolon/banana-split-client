import React, { useState, useEffect } from 'react'

export default function LoginForm({ onSuccess }) {
  const [formValues, setFormValues] = useState(null)
  const [error, setError] = useState(null)

  function handleSubmit(event) {
    event.preventDefault()
    const {
      username: { value: username },
      password: { value: password },
    } = event.target.elements
    setFormValues({ username, password })
  }

  useEffect(() => {
    if (!formValues) return
    fetch('http://localhost:4001/api/auth/login', {
      method: 'POST',
      body: JSON.stringify(formValues),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(res => res.json())
      .then(json => {
        console.log(json)
        if (typeof json?.message !== 'undefined') return setError(json.message)
        // TODO: Swap localstorage for httpOnly cookies
        const {
          token,
          user,
        } = json
        window.localStorage.setItem('token', token)
        onSuccess(user)
      })
  }, [formValues, onSuccess])
  return (
    <div>
      <form
        onSubmit={handleSubmit}
        style={{
          border: '1px solid red',
        }}
      >
        <h1>Login:</h1>
        <label htmlFor="username">username:</label>
        <input type="text" name="username" id="username"></input>
        <label htmlFor="password">password:</label>
        <input type="password" name="password" id="password"></input>
        <button type="submit">Submit</button>
      </form>
      {error ? <div style={{ color: 'red' }}>{`erro: ${error}`}</div> : null}
    </div>
  )
}
