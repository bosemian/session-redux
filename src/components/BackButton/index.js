import React from 'react'
import { Link } from 'react-router-dom'

const BackButton = ({ to = '/' }) => {
  return (
    <div className="columns">
      <div className="column is-12">
        <Link to={to} className="button">
          Back to Home
        </Link>
      </div>
    </div>
  )
}

export default BackButton
