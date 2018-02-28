import axios from "axios";

export function fetchModels() {
  return function(dispatch) {
    dispatch({type: "FETCH_MODELS"});

    axios.get("./api/model")
      .then((response) => {
        dispatch({type: "FETCH_MODELS_FULFILLED", payload: response.data})
      })
      .catch((err) => {
        dispatch({type: "FETCH_MODELS_REJECTED", payload: err})
      })
  }
}

export function openModel(id) {
    return function(dispatch) {
        dispatch({type: "OPEN_MODEL"});
        axios.get("./api/mainModel/fetchModel?id="+id)
            .then((response) => {
                dispatch({type: "OPEN_MODEL_FULFILLED", payload: response.data})
            })
            .catch((err) => {
                dispatch({type: "OPEN_MODEL_REJECTED", payload: err})
            })
    }
}

export function deleteModel(id) {
    return function(dispatch) {
      dispatch({type: 'DELETE_MODEL', payload: id});
        axios.delete("./api/model/" + id)
            .then((response) => {
                dispatch({type: "DELETE_MODEL_FULFILLED", payload: response.data})
            })
            .catch((err) => {
                fetchModels()(dispatch)
                dispatch({type: "SHOW_NOTIFICATION", payload: {type:"INFO", text:"Das Model konnte nicht gelöscht werden."}})
            })

    }
}
