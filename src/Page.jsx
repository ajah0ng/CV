import AboutMe from "./sections/Aboutme";
import Profile from "./sections/Profile";

function Page() {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-10">
      
      {/* White Page Container */}
      <div className="relative bg-[#F5E6CC] shadow-lg rounded-lg w-full max-w-7xl h-[200vh] p-10">
        <Profile />
        <AboutMe />

{/* Experiences */}
<div className="p-4">
  <h2 className="text-3xl font-semibold text-gray-700">Experiences</h2>
  <div className="mt-4">
    <ul className="list-disc list-inside text-gray-600 mt-2 space-y-2">
      <li>
        <span className="font-medium">Senoptix (Deep-Tech Startup) - Sales & Software Intern</span>:  
        Conducted market research, developed software solutions, and created visual assets to communicate scientific findings effectively.
      </li>
      <li>
        <span className="font-medium">Young Entrepreneurship Program (YEP!) - Vice President</span>:  
        Led design thinking workshops, collaborated with startups, and facilitated learning experiences for students.
      </li>
      <li>
        <span className="font-medium">The Allergometer - Founder</span>:  
        Developed an idea for a novel allergen detection device, participated in pitch competitions, and explored commercialization strategies.
      </li>
      <li>
        <span className="font-medium">Peter Farrell Cup - Startup Competition</span>:  
        Pitched *The Allergometer* idea in a competitive environment, gaining experience in storytelling, business strategy, and resilience.
      </li>
    </ul>
  </div>

  <p className="text-gray-600 mt-4">
    My journey through startups, competitions, and leadership roles has helped me develop strong technical, communication, and problem-solving skills. I'm passionate about bringing ideas to life, tackling real-world challenges, and continuously learning from the people around me.
  </p>
</div>

         {/* Projects */}
         <div className="p-4">
          <h2 className="text-3xl font-semibold text-gray-700">Projects</h2>
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


         {/* Leadership */}
         <div className="p-4">
          <h2 className="text-3xl font-semibold text-gray-700">Leadership</h2>
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


      {/* Experiences */}




    </div>
  );
}

export default Page;
