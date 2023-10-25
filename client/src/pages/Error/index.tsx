import React from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../../components/Layout";

const Error: React.FC = () => {
  const Navigate = useNavigate();

  const goBack = () => {
    Navigate(-1);
  };

  return (
    <>
      <Layout />
      <div className="flex justify-center items-center h-screen">
        <div className="p-8 bg-white rounded-lg shadow-md text-center">
          <h4 className="mb-4 text-2xl text-primary">Error 404: Page not found</h4>
          <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600" onClick={goBack}>
            Go Back
          </button>
        </div>
      </div>
    </>
  );
};

export default Error;
