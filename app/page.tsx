import Link from "next/link";

const Home = () => {
  return (
    <main className="">
      <h2>Home page</h2>

      <Link href={"/translate"}>Translate Now</Link>
    </main>
  );
};

export default Home;
