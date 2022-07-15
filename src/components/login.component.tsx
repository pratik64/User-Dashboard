
import { Form, Formik, useField } from "formik";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { loginFailure, loginRequestAction, loginSuccess } from "../actions/login.action";
import { loginRequest } from "../services/user.service";
import { MyTextInputPropsTypes } from "../types/myInputText.type";
import { UserDetails } from "../types/userDetails.type";

const MyTextInput = ({ label, ...props }: MyTextInputPropsTypes) => {
  const [field, meta] = useField(props);
  return (
    <>
      <div className="form-group">
        <label htmlFor={props.id || props.name}>{label}</label>
        <input className="form-control" {...field} {...props} />
        {meta.touched && meta.error ? (
          <small className="form-text text-danger">{meta.error}</small>
        ) : null}
      </div>
    </>
  );
};

function LoginComponent() {

  const initialValues = {
    email: '',
    password: ''
  }

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email addresss`")
      .required("Required"),
    password: Yup.string()
      .min(5, "Must contain atleast 5 characters")
      .max(15, "Must be 15 characters or less")
      .required("Required")
  })

  const state = useSelector((state: any) => state)
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if(state.isLoggedIn){
      navigate('/dashboard',{replace:true})
    }
  },[])

  const login = (userDetails: UserDetails) => {
    dispatch(loginRequestAction(userDetails))

    loginRequest(userDetails)
      .then((data: { token: string; }) => {
        dispatch(loginSuccess(data.token))
        navigate('/dashboard',{replace:true})
      })
      .catch((error: { code: string; }) => {
        if(error.code === 'ERR_BAD_REQUEST')
          dispatch(loginFailure("Invalid Credentials"))
      })
  }
  return (
    <>

      <div className="d-flex h-100 px-5 mx-5 align-items-center justify-content-center">
        <div className="container w-50 px-5 mx-5">
          <h1 className="text-center">SIGN IN</h1>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values: UserDetails) => {
              login(values)
            }}
          >
            <Form>
              <MyTextInput
                label="Email"
                name="email"
                type="email"
                placeholder="eve.holt@reqres.in"
              />
              <MyTextInput
                label="Password"
                name="password"
                type="password"
                placeholder="password"
              />

              <button data-testid='loginBtn' type="submit" className="btn w-100 btn-primary">
                {(state.loginReducer.loading) ? (<div className="spinner-border text-light" role="status">
                  <span className="sr-only">Loading...</span>
                </div>) : 'Sign In'}
              </button>
            </Form>
          </Formik>
          <small className="form-text text-5 text-center text-danger">{state.loginReducer.error}</small>
        </div>
      </div>
    </>
  )
}


export default LoginComponent;