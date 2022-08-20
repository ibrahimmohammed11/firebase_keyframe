import Head from "next/head";
import React from "react";

const About = () => {
  return (
    <>
      <Head>
        <title>about</title>
      </Head>
      <div className="min-h-screen text-center">
        <h1 className="text-3xl text-blue-700 my-5">Protected Page</h1>
        <p className="text-xl">
          You can view this page because you are signed in.
        </p>
      </div>
    </>
  );
};

export default About;
