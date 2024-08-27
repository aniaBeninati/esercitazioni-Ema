import React from "react";

export interface ICard {
  id: string;
  category: string;
  title: string;
  description: string;
  imageUrl: string;
}

interface CardProps {
  post: ICard;
}

const Card: React.FC<CardProps> = ({ post }) => {
  return (
    <article
      key={post.id}
      className="max-w-sm rounded overflow-hidden shadow-lg m-4"
    >
      <div className="w-full h-48 overflow-hidden">
        <img
          className="object-cover w-full h-full"
          src={post.imageUrl}
          alt={post.title}
        />
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{post.title}</div>
        <p className="text-gray-700 text-base">{post.description}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          #{post.category}
        </span>
      </div>
    </article>
  );
};

export default Card;
