import Head from "next/head";
import { useEffect, useState } from "react";
import Header from "@/components/layout/Header";
import PostCard from "@/components/common/PostCard";
import { type PostProps } from "@/interfaces";

export default function PostsPage() {
  const [posts, setPosts] = useState<PostProps[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=10")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <Head>
        <title>Posts - ALX Project</title>
      </Head>
      <Header />
      <main className="p-8">
        <h1 className="text-3xl font-bold text-purple-700 mb-6">Posts</h1>

        {loading ? (
          <p className="text-gray-600">Loading posts...</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {posts.map((post) => (
              <PostCard key={post.id} {...post} />
            ))}
          </div>
        )}
      </main>
    </>
  );
}
