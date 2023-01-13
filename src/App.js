import React, {useEffect, useState} from 'react'
import axios from 'axios'

function App() {
  
  const[backendData, setBackendData] = useState([{}])
  
  useEffect(() => {
    // fetch("https://node-app.adaptable.app/api").then(
    //   response => response.json()
    // ).then(
    //   data => { 
    //     console.log(data)
    //     setBackendData(data)
    //   }
    // )
    const headers = {
      'Content-Type': 'application/json',
      "Access-Control-Allow-Origin": "*"
  };
    axios.get("https://node-app.adaptable.app/api", {header:headers}).then(data => {
      setBackendData(data.data)
    })

  }, [])
  
  return (

  <div>
    
  {(typeof backendData.users === 'undefined') ? (
    <p>Loading...</p>
  ) : (
    backendData.users.map((user, i) => (
      <p key={i} >{user}</p>
    ))
  )}

</div>

    
     
  )
}

export default App