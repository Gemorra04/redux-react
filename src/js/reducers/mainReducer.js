export default function reducer(state={
    loggedIn:false
  }, action) {

    switch (action.type) {
      case "LOGIN_FULLFILLED": {
        return {...state, loggedIn: true}
      }
        case "LOGOUT_FULLFILLED": {
            return {...state, loggedIn: false}
        }
    }

    return state
}
