import React from "react";
import './login.css'
import Button from "../../components/Button";
import { Formik, Form, Field,ErrorMessage } from "formik";
// import img from "../../image/login.png";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom"


const Login = () => {

    const loginSchema = Yup.object().shape({
        phone: Yup.string()
            .matches(/^\d+$/, 'Phone number can only contain digits')
            .min(10, 'Phone number must be at least 10 digits')
            .max(10, 'Phone number can only be 10 digits')
            .required('Phone number is required'),
        password: Yup.string()
            .min(5, 'Password must be at least 8 characters')
            .max(50, 'Password can only be 50 characters or less')
            .required('Password is required'),
    });

    const navigate = useNavigate();

    return (
        <>
            <div className="login-area">
                <div className="login-box" >
                    <div className="left-side">
                        <h3>Welcome to login page</h3>
                        <Formik
                            initialValues={{ phone: '', password: '' }}
                            validationSchema={loginSchema}
                            onSubmit={(values, { setSubmitting }) => {
                                // submit the form
                            }}
                        >
                            {({ isSubmitting }) => (
                                <Form>
                                    <Field type="tel" name="phone" placeholder="Phone number" />
                                    <ErrorMessage name="phone" component="div" />
                                    <Field type="password" name="password" placeholder="Password" />
                                    <ErrorMessage name="password" component="div" />
                                    <Button type="submit">
                                        Log in
                                    </Button>
                                </Form>
                            )}
                        </Formik>
                    </div>
                    </div>
            </div>
        </>
    );
};

export default Login;
