import mock from '../components/mock';

const initialState = {
  gamersCount: 0,
  gamers: mock,
  isEnterPoints: false,
  isShowResult: false, 
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

    case `SET_USER_COUNT`:
      return {
        ...state,
        gamersCount: action.payload
      };

    case `START_ENTER_POINTS`:
      return {
        ...state,
        isEnterPoints: action.payload
      } 

    case `SHOW_RESULT`: 
      return {
        ...state,
        isShowResult: action.payload
      }  

    default: return state;  
  }
};

export { reducer, ActionCreator };