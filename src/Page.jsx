import { useState } from "react";
import AboutMe from "./sections/Aboutme";
import Profile from "./sections/Profile";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Leadership from "./sections/Leadership";

function Page() {
  const [currentTab, setCurrentTab] = useState("AboutMe");


  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-10">
      {/* White Page Container */}
      <div className="relative bg-[#F5E6CC] shadow-lg rounded-lg w-full max-w-7xl h-[200vh] p-10">  
        <Profile/>
        
        {/* Tab Navigation */}
        <div className="mt-10 flex space-x-4 border-b-2 border-gray-300 pb-2">

          <button
              className={`px-4 py-2 rounded-t-lg font-semibold ${
                currentTab === "AboutMe" ? "bg-white text-blue-600 border-b-2 border-blue-500" : "text-gray-600 hover:text-blue-600"
              }`}
              onClick={() => setCurrentTab("AboutMe")}
            >
              About Me
          </button>

          <button
            className={`px-4 py-2 rounded-t-lg font-semibold ${
              currentTab === "Experience" ? "bg-white text-blue-600 border-b-2 border-blue-500" : "text-gray-600 hover:text-blue-600"
            }`}
            onClick={() => setCurrentTab("Experience")}
          >
            Experiences
          </button>

          <button
            className={`px-4 py-2 rounded-t-lg font-semibold ${
              currentTab === "Projects" ? "bg-white text-blue-600 border-b-2 border-blue-500" : "text-gray-600 hover:text-blue-600"
            }`}
            onClick={() => setCurrentTab("Projects")}
          >
            Projects
          </button>

          <button
            className={`px-4 py-2 rounded-t-lg font-semibold ${
              currentTab === "Leadership" ? "bg-white text-blue-600 border-b-2 border-blue-500" : "text-gray-600 hover:text-blue-600"
            }`}
            onClick={() => setCurrentTab("Leadership")}
          >
            Leadership
          </button>
        </div>

        {/* Dynamic Content Based on Active Tab */}
        <div className="mt-4">
          {currentTab === "Experience" && <Experience />}
          {currentTab === "AboutMe" && <AboutMe />}
        </div>
      </div>
    </div>
  );
}

export default Page;
