import Head from "next/head";
import Header from "@/components/layout/Header";

export default function Home() {
  return (
    <>
      <Head>
        <title>ALX Project 2</title>
      </Head>
      <Header />
      <main className="p-8">
        <h2 className="text-2xl font-bold text-gray-800">Hello, Next.js + TypeScript + Tailwind!</h2>
      </main>
    </>
  );
}
