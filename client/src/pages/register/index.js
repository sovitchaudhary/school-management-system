import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { Formik, Field, Form } from 'formik';
import Image from "next/image";
import 'bootstrap/dist/css/bootstrap.min.css';
import * as Yup from 'yup';

const validationRegisterSchema = Yup.object().shape({
    fullName: Yup.string()
        .min(2, "Too Short!")
        .max(50, "Too Long!")
        .required("Name is required"),
    email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
    password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
});

const Register = () => {
    const [responseMsg, setResponseMsg] = useState({ msgLabel: "", msgType: "" });
    const router = useRouter();
    const registerUser = async (values) => {
        try {
        const response = await fetch("http://localhost:8080/register", {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify(values),
        });
        const result = await response.json();
        if (response.status) {
            setResponseMsg({
            msgLabel: result.msg,
            msgType: response.status == 409 ? "error" : "success",
            });
        }
        } catch (error) {
        setResponseMsg({ msgLabel: "Something went wrong", msgType: "error" });
        console.error("Error posting data:", error);
        }
    };
        
    return (
        <Formik
            initialValues={{ 
              fullName: '', 
              email: '', 
              password:'',

             }}
             validationSchema={validationRegisterSchema}
            onSubmit={(values, { setSubmitting }) => {
                
                //console.log(values);
                registerUser(values);
            }}
            
        >
            {(formik, isSubmitting) => (
                <div className='container'>
                     <div className="row justify-content-center">
                        <div className="col-12 col-md-6">
                            <div className='text-center'>
                            <Image src={'/limg.jpg'} width={100} height={100} alt="logo/"></Image>
                            <h4>Create Account</h4>
                            </div>
                            <Form>
                            <div className="form-group mb-3">
                                    <label htmlFor="fullName">Name</label>
                                    <Field name="fullName" className={(formik.touched.fullName && formik.errors.fullName) ? 'form-control is-invalid' : 'form-control'} type="text" />
                                    
                                    {formik.touched.fullName && formik.errors.fullName ? (
                                        <div className="invalid-feedback">{formik.errors.fullName}</div>
                                    ) : null}
                                </div>
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

                                <div className="form-group text-center">
                                    <button type="submit" className="btn btn-primary" disabled={isSubmitting}>{isSubmitting ? "Please wait..." : "Register"}</button>
                                </div>
                                <br></br>
                                <div className="col md-3 text-center" onClick={() => router.push("./login")}>
                                    <p>Already have an account? <b className="text-primary">Login</b></p>
                                </div>

                            </Form>
                        </div>
                    </div>

                </div>
            )
            }
        </Formik >
    );
};

export default Register;