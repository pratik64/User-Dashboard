import { constant } from "../../constants/login.actions";
import { loginFailure, loginRequestAction, loginSuccess } from "../login.action";


describe("Test action creators for Login Actions", () => {

    it("should return LOGIN_REQUEST action", () => {
     let userDetails = {
        email: 'xyz@gmail.com',
        password: 'password'
     }
      expect(loginRequestAction(userDetails)).toEqual({ type: constant.LOGIN_REQUEST, payload: userDetails });
    });


    it("should return LOGIN_SUCCESS action", () => {
        let token = 'token'
         expect(loginSuccess(token)).toEqual({ type: constant.LOGIN_SUCCESS, payload: token });
       });

    
    it('should return LOGIN_FAILURE action' , () => {
        let error = 'Error'
        expect(loginFailure(error)).toEqual({type:constant.LOGIN_FAILURE, payload:error})
    })
    
  });
  
  export {}