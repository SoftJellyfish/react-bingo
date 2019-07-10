export const startAction = () => dispatch => {
    dispatch({
      type: 'RESET_ACTION',
      payload: true,
      description: 'Game was reset.',
      reset: false,
      filled: true
    })
  }

export const onePlayerAction = () => dispatch => {
  dispatch({
    type: 'ONEPLAYER_ACTION',
    payload: true,
    description: 'One player mode.',
    reset: true,
    filled: true
  })
}
