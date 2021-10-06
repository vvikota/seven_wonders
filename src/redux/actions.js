
  export const setUserCount = count => ({
    type: `SET_USER_COUNT`,
    payload: count,
  })

  export const setUser = userData => ({
    type: `SET_USER`,
    payload: userData,
  })

  export const startEnterPoints = value => ({
    type: `START_ENTER_POINTS`,
    payload: value,
  })

  export const showResult = value => ({
    type: `SHOW_RESULT`,
    payload: value,
  })

  export const toggleLoader = () => ({
    type: `TOGGLE_LOADER`
  })