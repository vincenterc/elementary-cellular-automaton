import * as actionTypes from './reducers/action-types'

export default function(dispatch) {
  return {
    setElementaryCAState: state => {
      dispatch({
        type: actionTypes.SET_ELEMENTARY_CA_STATE,
        payload: state,
      })
    },
  }
}
