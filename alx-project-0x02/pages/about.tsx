import Head from "next/head";
import Header from "@/components/layout/Header";

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About - ALX Project</title>
      </Head>
      <Header />
      <main className="p-8">
        <h1 className="text-3xl font-bold text-green-700">This is the About Page</h1>
      </main>
    </>
  );
}
