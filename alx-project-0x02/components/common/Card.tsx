import React from "react";
import { type CardProps } from "@/interfaces";

const Card: React.FC<CardProps> = ({ title, content }) => {

    return (
        <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200 hover:shadow-lg transition-shadow">
        <h3 className="text-xl font-semibold text-blue-700 mb-2">{title}</h3>
        <p className="text-gray-700">{content}</p>
        </div>
    );
};

export default Card;
