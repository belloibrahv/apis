import { useEffect, useState } from "react";
import './App.css'

const App = () => {
  
  const [datas, setData] = useState('')
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('https://reqres.in/api/users?page=2')
      .then(response => {
        if (response.ok) {
          return response.json()
        }
        throw response
      })
      .then(data => {
        setData(data)
      })
      .catch(err => {
        console.error('Error Fetching Data: ', err)
        setError(err)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  if (loading) return 'Loading...'
  if (error) return 'Error'

  return (
    <div className="container">
      <h1>Hello There</h1>
      <div className="cards">
        {/* <p key={datas.data.name}>{datas.data.name}</p> */}
        {datas.data.map((user) => {
        return (
          <div className="card">
            <img key={user.avatar} src={user.avatar} alt='xdmnjdbhdb' />
            <div>
              <span key={user.first_name}>{user.first_name}</span>
              
              <span key={user.last_name}>{user.last_name}</span>
            </div>
            <div key={user.email}>{user.email}</div>
          </div>
        );
      })}
      </div>
    </div>
  )
}

export default App;
