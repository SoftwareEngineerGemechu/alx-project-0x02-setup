import Head from "next/head";
import Header from "@/components/layout/Header";
import UserCard from "@/components/common/UserCard";
import { type UserProps } from "@/interfaces";

interface UsersPageProps {
  users: UserProps[];
}

export default function UsersPage({ users }: UsersPageProps) {
  return (
    <>
      <Head>
        <title>Users - ALX Project</title>
      </Head>
      <Header />
      <main className="p-8">
        <h1 className="text-3xl font-bold text-green-700 mb-6">Users</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {users.map((user) => (
            <UserCard key={user.id} {...user} />
          ))}
        </div>
      </main>
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users: UserProps[] = await res.json();

  return {
    props: {
      users,
    },
  };
}
