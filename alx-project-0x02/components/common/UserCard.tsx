import React from "react";
import { type UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({ name, email, address }) => {
  return (
    <div className="border rounded-lg p-4 shadow-sm hover:shadow-md transition">
      <h2 className="text-xl font-semibold text-blue-700 mb-2">{name}</h2>
      <p className="text-gray-600 mb-1">{email}</p>
      <p className="text-gray-500 text-sm">
        {address.street}, {address.suite}, {address.city}, {address.zipcode}
      </p>
    </div>
  );
};

export default UserCard;
