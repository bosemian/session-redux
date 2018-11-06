import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import BackButton from '../../components/BackButton'
import { fetchUsername } from '../../actions'
import UserRepository from './UserRepository'

class UserDetail extends PureComponent {
  componentDidMount() {
    const { match, dispatch } = this.props
    const { username } = match.params

    dispatch(fetchUsername(username))
  }

  render() {
    const { user } = this.props
    return (
      <section className="section">
        <div className="container">
          <BackButton to="/" />
          <div className="columns">
            <div className="column is-3">
              <figure className="image is-square">
                <img
                  className="is-rounded"
                  src={user.avatar_url}
                  alt="User Avatar"
                />
              </figure>
            </div>
            <div className="column is-9">
              <h2 className="title">{user.name}</h2>
              <p className="subtitle">{user.company}</p>

              <p>{user.location}</p>
              <p>{user.bio}</p>

              <br />

              <p>
                <strong>Repos :</strong> {user.public_repos}
              </p>

              <p>
                <strong>Following :</strong> {user.following}
              </p>

              <p>
                <strong>Followers :</strong> {user.followers}
              </p>
            </div>
          </div>
          {user.login && <UserRepository username={user.name} />}
        </div>
      </section>
    )
  }
}

const mapStateToProps = state => ({
  isFetching: state.user.isFetching,
  user: state.user.data
})

export default connect(mapStateToProps)(UserDetail)
