import * as UserApiUtil from "../util/user_api_util";

export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_USER = "LOGOUT_USER";

const logoutUser = () => ({
    type: LOGOUT_USER
});

export const receiveCurrentUser = user => ({
    type: RECEIVE_CURRENT_USER,
    user
});

export const login = user => dispatch => (
    UserApiUtil.login(user)
        .then(user => dispatch(receiveCurrentUser(user)),
            errors => dispatch(receiveSessionErrors(errors.responseJSON)))
);

export const logout = () => dispatch => (
    UserApiUtil.logout()
        .then(() => dispatch(logoutUser()),
            errors => dispatch(receiveSessionErrors(errors.responseJSON)))
);

export const receiveSessionErrors = errors => ({
    type: RECEIVE_SESSION_ERRORS,
    errors
});