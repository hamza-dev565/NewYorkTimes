import React, { useEffect, useState } from "react";
import axios from "axios";

import Layout from "../../components/Layout";
import StoryCard from "../../components/StoryCard";
import SectionMenu from "../../components/SectionMenu";

interface Multimedia {
  url: string;
  format: string;
  type: string;
  subtype: string;
  caption: string;
  copyright: string;
}

interface Story {
  title: string;
  abstract: string;
  url: string;
  uri: string;
  multimedia?: Multimedia[] | null;
}

const Index: React.FC = () => {
  const [stories, setStories] = useState<Story[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [activeSection, setActiveSection] = useState<string>("science");

  useEffect(() => {
    const fetchStories = async () => {
      setIsLoading(true);
      const backendEndpoint = `${process.env.REACT_APP_BACKEND_ENDPOINT}/stories?type=${activeSection}`;

      try {
        const response = await axios.get<Story[]>(backendEndpoint);
        setStories(response.data);
      } catch (error) {
        console.error("There was an error fetching the stories:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchStories();
  }, [activeSection]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-blue-500"></div>
      </div>
    );
  }

  return (
    <>
      <Layout />
      <div className="max-w-7xl mx-auto mt-6">
        <SectionMenu activeSection={activeSection} onSectionClick={setActiveSection} />
        {isLoading ? (
          <div className="flex justify-center items-center h-[calc(100vh-200px)]">
            <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-blue-500"></div>
          </div>
        ) : (
          <div className="flex flex-wrap gap-4">
            {stories &&
              stories
                .filter(story => story.title && story.abstract && story.multimedia)
                .map(story => <StoryCard key={story.uri} {...story} />)}
          </div>
        )}
      </div>
    </>
  );
};

export default Index;
