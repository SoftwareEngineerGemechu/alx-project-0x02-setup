import Head from "next/head";
import { useState } from "react";
import Header from "@/components/layout/Header";
import Card from "@/components/common/Card";
import PostModal from "@/components/common/PostModal";
import { type CardProps } from "@/interfaces";

export default function HomePage() {
  const [posts, setPosts] = useState<CardProps[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddPost = (newPost: CardProps) => {
    setPosts((prevPosts) => [newPost, ...prevPosts]);
  };

  return (
    <>
      <Head>
        <title>Home - ALX Project</title>
      </Head>
      <Header />
      <main className="p-8 space-y-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-blue-800">This is the Home Page</h1>
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-blue-600 text-white px-4 py-2 rounded"
          >
            Create Post
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {posts.length === 0 ? (
            <p className="text-gray-600">No posts yet. Create one!</p>
          ) : (
            posts.map((post, index) => (
              <Card key={index} title={post.title} content={post.content} />
            ))
          )}
        </div>
      </main>

      <PostModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleAddPost}
      />
    </>
  );
}
