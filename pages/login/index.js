import React, { useState } from "react";
import * as yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import loginImg from "../../public/draw2.svg";
import Image from "next/image";
import { useAuth } from "../../context/AuthContext";
import { useRouter } from "next/router";
import Link from "next/link";

const Login = () => {
  const { user, login } = useAuth();
  const router = useRouter();
  const [err, setErr] = useState(null);

  const handleLogin = async (values) => {
    try {
      await login(values.email, values.password);
      setErr(null);
      router.push("/movies");
    } catch (err) {
      let index = err.message.indexOf("(");
      let fireErr = err.message.slice(index);
      setErr(fireErr);
    }
  };

  return (
    <>
      <div className="min-h-screen">
        <section>
          <div className="container px-6 py-12">
            <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
              <div className="md:w-8/12 lg:w-6/12 mb-12 md:mb-0">
                <Image src={loginImg} className="w-full" alt="login" />
              </div>
              <div className="md:w-8/12 lg:w-5/12 lg:ml-20">
                <h3 className="text-center my-3 text-xl	text-blue-600 lg:text-3xl">
                  Login
                </h3>
                <Formik
                  initialValues={{
                    email: "",
                    password: "",
                  }}
                  validationSchema={yup.object().shape({
                    email: yup.string().required().email(),
                    password: yup.string().required(),
                  })}
                  onSubmit={(values, { setSubmitting, resetForm }) => {
                    handleLogin(values);
                    setSubmitting(false);
                    resetForm();
                  }}
                >
                  {({ isSubmitting }) => (
                    <Form>
                      <div className="mb-6">
                        <Field
                          type="email"
                          name="email"
                          className="form-control block w-full px-4 py-2 text-xl text-gray-700 bg-white border border-solid border-gray-300 rounded focus:border-blue-600 focus:outline-none"
                          placeholder="Email address"
                        />

                        <ErrorMessage
                          name="email"
                          component="div"
                          className="text-red-600 px-2"
                        />
                      </div>
                      <div className="mb-6">
                        <Field
                          type="password"
                          name="password"
                          className="form-control block w-full px-4 py-2 text-xl text-gray-700 bg-white border border-solid border-gray-300 rounded focus:border-blue-600 focus:outline-none"
                          placeholder="Password"
                        />

                        <ErrorMessage
                          name="password"
                          component="div"
                          className="text-red-600 px-2"
                        />
                      </div>
                      <div className="mt-3">
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="inline-block px-7 py-3 bg-blue-600 text-white uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg w-full"
                        >
                          Log In
                        </button>
                      </div>
                      {err && (
                        <>
                          <p className="text-red-600 px-2">
                            {err} Please signup
                          </p>
                          <Link href="/signup" passHref>
                            <a className="bg-blue-600 px-6 py-2 text-white block  w-fit	 mt-4 rounded-md cursor-pointer text-md">
                              Signup
                            </a>
                          </Link>
                        </>
                      )}
                    </Form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Login;
