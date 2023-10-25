import React from "react";

interface Props {
  activeSection: string;
  onSectionClick: (section: string) => void;
}

const sections = ["arts", "home", "science", "us", "world"];

const SectionMenu: React.FC<Props> = ({ activeSection, onSectionClick }) => {
  return (
    <div className="flex justify-center md:justify-start space-x-4 md:space-x-6 my-8 overflow-x-auto">
      {sections.map(section => (
        <button
          key={section}
          className={`py-2 px-4 text-lg font-medium rounded-md focus:outline-none 
            ${section === activeSection ? "bg-blue-500 text-white" : "hover:bg-gray-200"}`}
          onClick={() => onSectionClick(section)}
        >
          {section.charAt(0).toUpperCase() + section.slice(1)}
        </button>
      ))}
    </div>
  );
};

export default SectionMenu;
