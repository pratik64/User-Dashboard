import { loginFailure, loginRequestAction, loginSuccess } from '../../actions/login.action';
import { initialState, loginReducer } from '../login.reducer'

describe("Test login reducer", () => {

    let state: { username: string; token: string; error: string; loading: boolean; isLoggedIn: boolean; };

    beforeEach(() => {
        state = initialState;
    });

    it("should change username and loading state to content of payload ", () => {
        const payload = {
            email : 'xyza@gmail.com',
            password : 'password'
        }
        const updatedState = { ...state, loading: true, username: payload.email };
        expect(loginReducer(state, loginRequestAction(payload))).toEqual(updatedState);
    });

    it("should change loading & token state to contents of payload", () => {
        const token = "token";
        const updatedState = { ...state, token: token, isLoggedIn: true };
        expect(loginReducer(state, loginSuccess(token))).toEqual(updatedState);
    });

    it("should change loading to false and set payload to error state", () => {
        const error = "Invalid Credentials";
        const updatedState = { ...state, error: error };
        expect(loginReducer(state, loginFailure(error))).toEqual(updatedState);
    });

    
});
