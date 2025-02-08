import AboutMe from "./sections/Aboutme";
import Profile from "./sections/Profile";

function Page() {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-10">
      {/* White Page Container */}
      <div className="relative bg-[#F5E6CC] shadow-lg rounded-lg w-full max-w-7xl h-[200vh] p-10">
        <Profile />
        <AboutMe />
      </div>
    </div>
  );
}

export default Page;
