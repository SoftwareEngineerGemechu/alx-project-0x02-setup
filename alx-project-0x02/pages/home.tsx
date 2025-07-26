import Head from "next/head";
import Header from "@/components/layout/Header";
import Card from "@/components/common/Card";

export default function HomePage() {
    return (
    <>
    <Head>
    <title>Home - ALX Project</title>
    </Head>
    <Header />
    <main className="p-8 space-y-6">
        <h1 className="text-3xl font-bold text-blue-800 mb-6">This is the Home Page</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card title="Card One" content="This is the content of the first card." />
        <Card title="Card Two" content="Here's some different content for the second card." />
        <Card title="Card Three" content="The third card can say anything you want." />
        </div>
    </main>
    </>
    );
}

