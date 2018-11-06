import React from 'react'
import { Link } from 'react-router-dom'

const UserCard = ({ user }) => {
  return (
    <div className="column is-3">
      <div className="card">
        <div className="card-image">
          <figure className="image is-square">
            <img src={user.avatar_url} alt="User avatar" />
          </figure>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <p className="title is-4">{user.login}</p>

              <div className="field is-grouped">
                <p className="control is-expanded has-text-centered">
                  <a href={user.html_url} className="button" target="_blank">
                    <span className="icon">
                      <i className="fab fa-github" />
                    </span>
                    <span>GitHub</span>
                  </a>
                </p>
                <p className="control is-expanded has-text-centered">
                  <Link to={`/users/${user.login}`} className="button is-info">
                    <span className="icon">
                      <i className="far fa-user" />
                    </span>
                    <span>Detail</span>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserCard
