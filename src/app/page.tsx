"use client"
import React, { useState, useEffect } from 'react';
import Input from './components/input';

const Page = () => {
  const [data, setData] = useState([]);

  // Fetch data on component mount (client-side rendering)
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://localhost:3000/api/users');
      const result = await response.json();
      setData(result);
    };

    fetchData();
  }, []);



  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1>hello vercel database</h1>
      <input />
      {data.map((val: any) => (
        <p key={val.email}>{`aik tera vi ${val.name}, aik mera ${val.email}`}</p>
      ))}
      <div>
        <h1 className="text-center pt-4">PostgreSQL Database with Drizzle Query</h1>
        <div className="pl-5"> <Input /></div>
       
        <div className="pl-5">
          {data.map((val: any) => (
            <p key={val.username}>{val.username}</p>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Page;
