import React from 'react'
import { useParams } from 'react-router-dom'

const ListingsCard = () => {
    const id=useParams()
    console.log(id)
  return (
    <div>ListingsCard</div>
  )
}

export default ListingsCard