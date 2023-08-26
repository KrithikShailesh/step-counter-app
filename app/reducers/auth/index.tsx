import { InitialAuthState } from "./state";
import { LOGIN_STATUS } from "./types";

const authReducer = (
  state = InitialAuthState,
  action: { type: String; payload: String }
) => {
  const type = action.type;
  const response = action.payload;

  switch (type) {
    case LOGIN_STATUS:
      return {
        ...state,
        isLoggedIn: response,
      };
    default:
      return state;
  }
};

export { authReducer };
