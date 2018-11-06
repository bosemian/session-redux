import { FETCH_USERNAME } from '../actions'

const initialState = {
  isFetching: false,
  data: {},
  error: null
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_USERNAME.PENDING:
      return {
        ...state,
        isFetching: true
      }
    case FETCH_USERNAME.SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: payload
      }
    case FETCH_USERNAME.FAILED:
      return {
        ...state,
        isFetching: false,
        error: payload
      }
    default:
      return state
  }
}
