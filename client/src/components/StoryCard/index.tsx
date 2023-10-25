import React from "react";

interface Multimedia {
  url: string;
  format: string;
  type: string;
  subtype: string;
  caption: string;
  copyright: string;
}

interface StoryCardProps {
  title: string;
  abstract: string;
  url: string;
  uri: string;
  multimedia?: Multimedia[] | null;
}

const StoryCard: React.FC<StoryCardProps> = ({ title, abstract, url, multimedia }) => {
  const imageUrl = multimedia?.[0]?.url || "";
  return (
    <div className="rounded-xl overflow-hidden shadow-lg w-full md:w-[48%] lg:w-[32%] hover:scale-105 transition-all hover:shadow-3xl hover:border hover:border-blue-200">
      <div className="relative h-64">{imageUrl && <img className="w-full h-full object-cover" src={imageUrl} alt={title} />}</div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 truncate">{title}</div>
        <p className="text-gray-700 text-base line-clamp-3">{abstract}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded mb-4">
          <a href={url} target="_blank" rel="noopener noreferrer">
            Read more
          </a>
        </button>
      </div>
    </div>
  );
};

export default StoryCard;
