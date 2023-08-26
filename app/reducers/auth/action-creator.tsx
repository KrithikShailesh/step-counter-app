import { LOGIN_STATUS } from "./types";

const login = () => {
  return (dispatch: any) => {
    dispatch({ type: LOGIN_STATUS, payload: true });
  };
};

export { login };
