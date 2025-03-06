import { Outlet } from "react-router-dom"
import { Link } from "react-router-dom"

function About(){

    return ( (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-300">
            <h2 
            className="text-3xl font-bold text-blue-600">
                About Page</h2>
            <p
            className="text-gray-700 mt-4 text-lg">
                This page provides inforamtion about us and our values and ideas</p>
        <Link className="text-1xl text-blue-400"
            to='/about/team'>Our Team</Link>
        <Link className="text-1xl text-blue-400"
            to='/'>Back to Home</Link>
        <div className="mt-8 w-full max-w-4xl">
            <Outlet />
        </div>

        </div>
    ))
}

export default About