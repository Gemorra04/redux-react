import { combineReducers } from "redux"

import models from "./modelsReducer"
import user from "./userReducer"
import main from "./mainReducer"

export default combineReducers({
    models,main,
  user,
})
