// imports
import React from 'react'
import { authFetch } from '../auth'
import { useState, useEffect } from 'react';


export function User() {
    const [message, setMessage] = useState('')
  
    useEffect(() => {
      authFetch("https://mile12db.azurewebsites.net/api/users").then(response => {
        if (response.status === 401){
          setMessage("Sorry you aren't authorized!")
          return null
        }
        return response.json()
      }).then(response => {
          setMessage(response.data)
          console.log(response[0].username)
          setMessage(" User name" + response[0].username)

        }
      )
    }, [])
    return (
      <h2>check console</h2>
    )
  }