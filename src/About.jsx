import { Outlet, useSearchParams } from "react-router-dom"
import { Link } from "react-router-dom"

function About(){
    // build in hook to read and modify URL search parameters
    const[searchParams, setSearchParams] = useSearchParams();
    const topic = searchParams.get("topic") || "general" ;

    const handleTopic = (newTopic) => {
        setSearchParams({topic: newTopic});
    }

    return ( 
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-300">
            <h2 
            className="text-3xl font-bold text-blue-600">
                About Page</h2>
            <p
            className="text-gray-700 mt-4 text-lg">
                This page provides inforamtion about us and our values and ideas</p>
        <nav className="mt-6">
            <ul>
                <p> <Link className="text-1xl text-blue-400"
                        to='/about/team'>Our Team</Link></p>
                <p> <Link className="text-1xl text-blue-400"
                        to='/'>Back to Home</Link></p>
            </ul>

        <div className="mt-6">
            <h3 className="text-xl text-gray-800">Choose a topic</h3>
            <div className="flex space-x-4 mt-4">
                <button 
                    onClick={() => handleTopic("Team") }
                    className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-800">
                    Team
                </button>
                <button 
                    onClick={() => handleTopic("Mission") }
                    className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-800">
                    Mission
                </button>
                <button 
                     onClick={() => handleTopic("Vision") }
                    className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-800">
                    Vision
                </button>
            </div>
        </div>

        <div className="mt-8 text-lg text-gray-700">
            <p>Current Topic: {topic}</p>
        </div>



        </nav>
        <div className="mt-8 w-full max-w-4xl">
            <Outlet />
        </div>

        </div>
    )
}

export default About