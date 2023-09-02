import React from 'react';
import { Formik, Field, Form } from 'formik';
import Image from "next/image";
import 'bootstrap/dist/css/bootstrap.min.css';
import * as Yup from 'yup';

const Login = () => {

    const validationLoginSchema = Yup.object().shape({
        email: Yup.string()
            .email("Invalid email address")
            .required("Email is required"),
        password: Yup.string()
            .min(6, "Password must be at least 6 characters")
            .required("Password is required"),
    });

    return (
        <Formik
            initialValues={{ 
              email: '', 
              password: '',
            }}
            onSubmit={(values, { setSubmitting }) => {
                console.log(values);
            }}
            validationSchema={validationLoginSchema}
        >
            {(formik, isSubmitting) => (
                <div className='container'>
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-6">
                            <div className='text-center'>
                                <Image src={'/limg.jpg'} width={100} height={100} alt="logo/"></Image>
                                <h4>Login to Your Account</h4>
                            </div>
                            <Form>
                                <div className="form-group mb-3">
                                    <label htmlFor="email">Email</label>
                                    <Field name="email" className={(formik.touched.email && formik.errors.email) ? 'form-control is-invalid' : 'form-control'} type="email" />
                                    
                                    {formik.touched.email && formik.errors.email ? (
                                        <div className="invalid-feedback">{formik.errors.email}</div>
                                    ) : null}
                                </div>

                                <div className="form-group mb-3">
                                    <label htmlFor="password">Password</label>
                                    <Field name="password" className={(formik.touched.password && formik.errors.password) ? 'form-control is-invalid' : 'form-control'} type="password" />
                                    
                                    {formik.touched.password && formik.errors.password ? (
                                        <div className="invalid-feedback">{formik.errors.password}</div>
                                    ) : null}
                                </div>

                                <div className="form-group">
                                    <button type="submit" className="btn btn-primary" disabled={isSubmitting}>{isSubmitting ? "Please wait..." : "Login"}</button>
                                </div>

                            </Form>
                        </div>
                    </div>

                </div>
            )}
        </Formik>
    );
};

export default Login;
