export default (state = {result: false, description: '', reset: false, filled: false}, action) => {
    switch (action.type) {
      case 'RESET_ACTION':
        return {
          result: action.payload,
          description: action.description,
          reset: action.reset,
          filled: action.filled
        }
      case 'ONEPLAYER_ACTION':
        return {
          result: action.payload,
          description: action.description,
          reset: action.reset,
          filled: action.filled
        }
      default:
        return state
    }
  }