const initialState = {
  gamers: [],
}

const ActionCreator = {

  setUser: (userData) => ({
    type: `SET_USER`,
    payload: userData,
  })
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case `SET_USER`: 
      let refreshGamers = state.gamers;
      refreshGamers.push(action.payload);
      return {
        ...state,
        gamers: [...refreshGamers]
      };

    default: return state;  
  }
};


export { reducer, ActionCreator };