function Page() {

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-6">
      {/* Profile Section */}
        <div className="flex items-center gap-6">
          <div className="absolute top-6 left-6 flex items-center gap-6">
          <img
            src="./profile.png"
            alt="Profile"
            // Enlarges on hover
            className="w-60 h-60 rounded-full object-cover border-4 border-blue-500 transition-transform duration-300 hover:scale-110"
          />
        <div className="flex flex-col">
          <h1 className="text-3xl font-bold text-gray-800">Anna Hong</h1>
          <p className="text-lg text-gray-600">3rd Year Computer Science / Science Student UNSW</p>
        </div>
          </div>
        </div>

        {/* About Section */}
        <div className="mt-6">
          <h2 className="text-xl font-semibold text-gray-700">About Me</h2>
          <p className="text-gray-600 mt-2">
            Hi, my name is Anna
            Passionate about technology, bioinformatics, and AI-driven solutions. 
            Experienced in software development, market research, and scientific communication.
          </p>
        </div>
  
    </div>
  );
}

export default Page;
