import Head from "next/head";
import Header from "@/components/layout/Header";
import Button from "@/components/common/Button";

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About - ALX Project</title>
      </Head>
      <Header />
      <main className="p-8 space-y-6">
        <h1 className="text-3xl font-bold text-green-700 mb-4">This is the About Page</h1>

        <div className="space-x-4">
          <Button label="Small Button" size="small" shape="rounded-sm" />
          <Button label="Medium Button" size="medium" shape="rounded-md" />
          <Button label="Large Button" size="large" shape="rounded-full" />
        </div>
      </main>
    </>
  );
}
