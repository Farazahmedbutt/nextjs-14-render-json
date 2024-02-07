import { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';

const Contact: NextPage = () => {
  return (
    <div className="p-4">
      <Head>
        <title>Contact us Page</title>
      </Head>
      <h1 className="text-2xl font-bold">Contact us</h1>
    </div>
  );
};

export default Contact;
