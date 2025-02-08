function Page() {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-10">
      
      {/* White Page Container */}
      <div className="relative bg-[#F5E6CC] shadow-lg rounded-lg w-full max-w-7xl h-[200vh] p-10">
        
        
        {/* Profile Section */}
        <div className="flex items-center gap-20">
          {/* Profile Image */}
          <img
            src="./profile.png"
            alt="Profile"
            className="w-55 h-55 rounded-full object-cover border-4 border-blue-500 transition-transform duration-300 hover:scale-110"
          />
          
          {/* Name & Title */}
          <div className="flex flex-col gap-4">
            <h1 className="text-5xl font-bold text-gray-800">Anna Hong</h1>
            <p className="text-lg text-gray-600">Email: annajahong@gmail.com</p>
            <p className="text-lg text-gray-600">Linkedin: annajahong@gmail.com</p>
            <p className="text-lg text-gray-600">github: annajahong@gmail.com</p>
          </div>
        </div>

        {/* Placeholder for Additional Sections */}
        <div className="mt-10 p-4">
          <h2 className="text-2xl font-semibold text-gray-700">About Me</h2>
          <p className="text-gray-600 mt-2">
          Hi All, Welcome to my interactive CV created with Vite, React & Tailwind CSS! 
          </p>
          <p className="text-gray-600 mt-2">
          My name is Anna and I am currently a 3rd year at UNSW, pursuing degrees in Science and Computer Science with a major in Bioinformatics. 
          Throughout my coursework, I’ve had the opportunity to delve into how computational and analytical tools can drive advancements in healthcare and biotechnology.
          Seeing this transformative impact of technology on larger issues, I was not only inspired to reflect upon issues that were present in my own life, but I also found myself gravitating towards learning about issues experienced by others.
          </p>
          <p className="text-gray-600 mt-2">
          My journey as an intern at a startup, leading Design Thinking workshops at YEP!, and stepping into the world of pitching for the first time at the Peter Farrell Cup (newsflash: we didn’t make it through) has been an incredible learning experience. Through the ups & “downs” I’ve gained invaluable skills in technical development, communication and navigating the complexities of bringing innovation to market.
          I’m passionate about my ideas and putting my foot down every stage of the process, and I’m always interested in learning and understanding people.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Page;
