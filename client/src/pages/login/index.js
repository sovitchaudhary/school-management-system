import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Please Enter Your Name"),
  password: Yup.string()
    .min(6, "Too Short!")
    .max(50, "Too Long!")
    .required("required"),
  
});

const Login = () => (
  <center>
    <div>
      <h1>Sign in</h1>
      <Formik
        initialValues={{
          firstName: "",
          password: "",
        }}
        validationSchema={SignupSchema}
        onSubmit={(values) => {
          // same shape as initial values
          console.log(values);
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <div className="container">
              <div>
                <Field type="text" name="firstName" placeholder="firstName" />
                {errors.firstName && touched.firstName ? (
                  <div>{errors.firstName}</div>
                ) : null}
              </div>
              <div>
                <Field type="password" name="password" placeholder="password" />
                {errors.password && touched.password ? (
                  <div>{errors.password}</div>
                ) : null}
              </div>
              <button type="submit" className="form-control" >Submit</button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  </center>
);
export default Login;
