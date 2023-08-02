import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Please Enter Your firstName"),
    lastName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Please Enter Your lastName"),
  email: Yup.string().email("Invalid email").required("Please Enter Your Email"),
  password: Yup.string()
    .min(6, "Too Password Must be four characters long!")
    .max(24, "Too Long!")
    .required("required"),
  
});

const Register = () => (
  <center>
    <div>
      <h1>Sign up</h1>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
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
              <div>
                <Field type="text" name="firstName" placeholder="firstName" />
                {errors.firstName && touched.firstName ? (
                  <div>{errors.firstName}</div>
                ) : null}
              </div>
              <div>
                <Field type="text" name="lastName" placeholder="lastName" />
                {errors.lastName && touched.lastName ? (
                  <div>{errors.lastName}</div>
                ) : null}
              </div>
              <div>
                <Field name="email" type="email" placeholder="Type Your Email" />
                {errors.email && touched.email ? <div>{errors.email}</div> : null}
              </div>
              <div>
                <Field type="password" name="password" placeholder="password" />
                {errors.password && touched.password ? (
                  <div>{errors.password}</div>
                ) : null}
              </div>
              <button type="submit" className="form-control" >Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  </center>
);
export default Register;
