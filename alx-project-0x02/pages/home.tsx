import Head from "next/head";
import Header from "@/components/layout/Header";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Home - ALX Project</title>
      </Head>
      <Header />
      <main className="p-8">
        <h1 className="text-3xl font-bold text-blue-700">This is the Home Page</h1>
      </main>
    </>
  );
}
