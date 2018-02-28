export default function reducer(state={
    models: [],
    currentModel: null,
    fetching: false,
    fetched: false,
    error: null,
  }, action) {

    switch (action.type) {
      case "FETCH_MODELS": {
        return {...state, fetching: true}
      }
      case "FETCH_MODELS_REJECTED": {
        return {...state, fetching: false, error: action.payload}
      }
      case "FETCH_MODELS_FULFILLED": {
        return {
          ...state,
          fetching: false,
          fetched: true,
          models: action.payload,
        }
      }
      case "DELETE_MODEL": {
        return {
          ...state,models: state.models.filter(model => model.id !== action.payload)
        }
      }
        case "DELETE_MODEL_FULFILLED": {
            return state

        }
        case "OPEN_MODEL_FULFILLED" : {
            return {
                ...state, currentModel: action.payload
            }
        }
        case "CLOSE_MODEL_FULFILLED" : {
            return {
                ...state, currentModel: null
            }
        }
        case "ADD_MODELS": {
            return {
                ...state,
                models: [...state.models, action.payload],
            }
        }
        case "UPDATE_MODELS": {
            const { id, text } = action.payload
            const newModels = [...state.models]
            const modelToUpdate = newModels.findIndex(model => model.id === id)
            newModels[modelToUpdate] = action.payload;

            return {
                ...state,
                models: newModels,
            }
        }
    }

    return state
}
