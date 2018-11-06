import { FETCH_USER_REPOSITORIES } from '../actions'

const initialState = {
  isFetching: false,
  data: [],
  error: null
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_USER_REPOSITORIES.PENDING:
      return {
        ...state,
        isFetching: true
      }
    case FETCH_USER_REPOSITORIES.SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: payload
      }
    case FETCH_USER_REPOSITORIES.FAILED:
      return {
        ...state,
        isFetching: false,
        error: payload
      }
    default:
      return state
  }
}
