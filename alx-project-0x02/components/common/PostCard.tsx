import React from "react";
import { type PostProps } from "@/interfaces";

const PostCard: React.FC<PostProps> = ({ title, body, userId }) => {
  return (
    <div className="border rounded-lg p-4 shadow-sm hover:shadow-md transition">
      <h2 className="text-xl font-semibold text-blue-800 mb-1">{title}</h2>
      <p className="text-sm text-gray-600 mb-2">Posted by User {userId}</p>
      <p className="text-gray-700">{body}</p>
    </div>
  );
};

export default PostCard;
