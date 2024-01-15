const getData = async () => {
  try {
    const response = await fetch('https://localhost:3000/api/users');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const res = await response.json();
    return res;
  } catch (error) {
    console.error('Error fetching data:', error);
    // Handle the error gracefully, e.g., display an error message
    return []; // Return an empty array in case of an error
  }
};

export default async function Home() {
  const data = await getData();
  console.log(data);

  // Check if data has elements before accessing properties
  const userData = data && data.length > 0 ? data[0] : { username: '', email: '' };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <p>{`aik tera ${userData.username}, aik mera ${userData.email}`}</p>
    </main>
  );
}
