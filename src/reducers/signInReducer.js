export const SignInReducer = (state, action) => {
  switch (action.type) {
    case "SIGN_IN":
      return {
        ...state,
        isLoading: true,
      };

    case "SUCCESS":
      return {
        ...state,
        isLoading: false,
        isSignedIn: true,
        error: "",
        password: "",
      };
    case "ERROR":
      return {
        ...state,
        isLoading: false,
        error: "Usuário os senha inválidos",
      };

    case "SIGN_OUT":
      return {
        ...state,
        isSignedIn: false,
        username: "",
      };
    case "SET_ATRIBUTE":
      return {
        ...state,
        [action.fieldName]: action.payload,
      };
    default:
      break;
  }
};

export const initialState = {
  username: "",
  password: "",
  isLoading: false,
  error: "",
  isSignedIn: false,
};
