import { useState, useEffect } from 'react'
import Header from '../components/header'
function User () {
  const [user, setUser] = useState({})
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch('/api/user/profile')
      .then(response => response.json())
      .then(data => {
        setUser(data)
        setLoading(false)
      })
      .catch(error => {
        setError(error.message)
        setLoading(false)
      })
  }, [])

  return (
    <>
  <Header />
    </>
  )
}

export default User