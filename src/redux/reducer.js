const initialState = {
  gamersCount: 0,
  gamers: [],
  isEnterPoints: false,
  isShowResult: false,
  isLoading: false,
  maxPlayers: 7
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case `SET_USER`:
      let refreshGamers = state.gamers
      refreshGamers.push(action.payload)
      return {
        ...state,
        gamers: [...refreshGamers],
      }

    case `SET_USER_COUNT`:
      return {
        ...state,
        gamersCount: action.payload,
      }

    case `START_ENTER_POINTS`:
      return {
        ...state,
        isEnterPoints: action.payload,
      }

    case `SHOW_RESULT`:
      return {
        ...state,
        isShowResult: action.payload,
      }

    case `TOGGLE_LOADER`:
      return {
        ...state,
        isLoading: !state.isLoading
      }

    default:
      return state
  }
}

export default reducer
