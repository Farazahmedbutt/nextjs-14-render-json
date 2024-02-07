import Head from 'next/head';
import Link from 'next/link';
import data from './data.json';
import { NextPage } from 'next';
interface Item {
  id: number;
  name: string;
  description: string;
}

const Home: NextPage = () => {
  return (
    <div className="p-4">
      <Head>
        <title>Next.js App with Tailwind CSS for Screen Process</title>
      </Head>
      <div className="flex justify-between mb-4">
        <h1 className="text-2xl font-bold">Home</h1>

        <div className="flex gap-5">
          <Link className="text-blue-500" href="/about">
            About
          </Link>
          <Link className="text-blue-500" href="/about">
            Contact us
          </Link>
        </div>
      </div>
      <div className="mb-2">
        <h2 className="text-xl font-bold"> List of Items</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.map((item) => (
          <div key={item.id} className="border p-4 rounded-lg">
            <h2 className="text-xl font-semibold">{item.name}</h2>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
