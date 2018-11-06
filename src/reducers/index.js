import { combineReducers } from 'redux'
import { routerReducer as router } from 'react-router-redux'
import userDetail from './user-detail'
import userRepos from './user-repos'
import users from './user-list'

export default combineReducers({
  router,
  user: userDetail,
  repos: userRepos,
  users
})
