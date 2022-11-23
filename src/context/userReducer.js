const UserReducer = (state, action) => {
    console.log(action,"ACtiON")
    switch (action.type) {
      case "REMOVE": {
        return {
          userDetails: null,
        };
      }
      case "SAVE": {
        return {
          userDetails: action.payload,
        };
      }
      default:
        return state;
    }
  };
  
  export default UserReducer;
  