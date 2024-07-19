
const initialState = {
    isSignedIn: false,
    userName: 'Conan'
  };


  export default (state = initialState, action: { type: string; payload: any }) => {
    switch (action.type) {
      case 'LOGIN':
        return { ...state, isSignedIn: true };
      case 'LOGOUT':
        return { ...state, isSignedIn: false };
      case 'CHANGE_NAME':
        return { ...state, userName: action.payload };
      default:
        return state;
    }
}