const getData = async () => {
  const fetchData = await fetch('http://localhost:3000/api/users');
  const res = await fetchData.json();
  return res;
};

export default async function Home() {
  const data = await getData();
  console.log(data);

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1>hello vercel database</h1>
      <p>{`aik tera ${data[0].name}, aik mera ${data[0].email}`}</p>
    </main>
  );
}
