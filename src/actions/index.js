import API from '../services/api'

const createAction = name => ({
  PENDING: `${name}_PENDING`,
  SUCCESS: `${name}_SUCCESS`,
  FAILED: `${name}_FAILED`
})

export const FETCH_USERNAME = createAction('FETCH_USERNAME')
export const FETCH_USER_REPOSITORIES = createAction('FETCH_USER_REPOSITORIES')
export const SEARCH_USERNAME = createAction('SEARCH_USERNAME')

export const fetchUsername = username => {
  return async dispatch => {
    dispatch({
      type: FETCH_USERNAME.PENDING
    })

    try {
      const user = await API.fetchUsername(username)
      dispatch({
        type: FETCH_USERNAME.SUCCESS,
        payload: user
      })
    } catch (error) {
      dispatch({
        type: FETCH_USERNAME.FAILED,
        payload: error
      })
    }
  }
}

export const fecthUserRepositories = username => {
  return async dispatch => {
    dispatch({
      type: FETCH_USER_REPOSITORIES.PENDING
    })

    try {
      const rep = await API.fecthUserRepositories(username)
      dispatch({
        type: FETCH_USER_REPOSITORIES.SUCCESS,
        payload: rep
      })
    } catch (error) {
      dispatch({
        type: FETCH_USER_REPOSITORIES.FAILED,
        payload: error
      })
    }
  }
}

export const searchUsername = username => {
  return async dispatch => {
    dispatch({
      type: SEARCH_USERNAME.PENDING
    })

    try {
      const rep = await API.searchUsername(username)
      dispatch({
        type: SEARCH_USERNAME.SUCCESS,
        payload: rep
      })
    } catch (error) {
      dispatch({
        type: SEARCH_USERNAME.FAILED,
        payload: error
      })
    }
  }
}
