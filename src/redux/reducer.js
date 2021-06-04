const initialState = {
  gamersCount: 0,
  gamers: [],
  isEnterPoints: false,
  isShowResult: false,
  isLoading: false,
  maxPlayers: 7
}

const ActionCreator = {
  setUserCount: (count) => ({
    type: `SET_USER_COUNT`,
    payload: count,
  }),

  setUser: (userData) => ({
    type: `SET_USER`,
    payload: userData,
  }),

  startEnterPoints: (value) => ({
    type: `START_ENTER_POINTS`,
    payload: value,
  }),

  showResult: (value) => ({
    type: `SHOW_RESULT`,
    payload: value,
  }),

  toggleLoader: () => ({
    type: `TOGGLE_LOADER`
  })
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

export { reducer, ActionCreator }
