import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import AuthenticatedApp from './AuthenticatedApp'
import UnauthenticatedApp from './UnauthenticatedApp'
/*
The component which has the user data prevents the rest of the app from being rendered until the user data is retrieved or it's determined that there is no logged-in user

straightfoward implementation:
*/

function FullApp() {
  const [user, setUser] = useState(null)
  const token = window.localStorage.getItem('token')

  useEffect(() => {
    // TODO: Fix this endpoint and this fetch call
    if (user) return
    fetch('http://localhost:4001/api/auth/me', {
      method: 'GET',
      headers: {
        Authorization: `bearer ${token}`,
      },
    }).then(
      response => setUser(response.data),
      () => {
        window.localStorage.removeItem('token')
        setUser(null)
      },
    )
  }, [token, user])
  if (!user && token) {
    return <h1>loading...</h1>
  }
  // return unauth app here
  else if (!user && !token) {
    return <UnauthenticatedApp onSuccess={setUser} />
  } else {
    return (
      <AuthenticatedApp
        user={user}
        logout={() => {
          window.localStorage.removeItem('token')
          setUser(null)
        }}
      />
    )
  }
}

ReactDOM.render(
  <React.StrictMode>
    <FullApp />
  </React.StrictMode>,
  document.getElementById('root'),
)
