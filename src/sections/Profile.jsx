
export default function Profile() {

    return (
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
    );
    }