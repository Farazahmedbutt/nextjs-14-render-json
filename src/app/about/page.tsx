import { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';

const About: NextPage = () => {
  return (
    <div className="p-4">
      <Head>
        <title>About Page</title>
      </Head>
      <h1 className="text-2xl font-bold">About</h1>
    </div>
  );
};

export default About;
