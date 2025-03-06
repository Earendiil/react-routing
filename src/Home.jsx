import { useNavigate } from "react-router-dom"


function Home (){

    const navigate = useNavigate();
    const handleLogin = () => {
        // Login logic here
        // navigate (-1); takes the user to the previous page
        navigate("/dashboard");
    }


    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-300">
            <h2 
                 className="text-3xl font-bold text-blue-600">
                Home Page</h2>
            <p
                 className="text-gray-700 mt-4 text-lg">
                Welcome to the Home Page! Explore this site to learn more.</p>

            <button
                 className="text-gray-900 mt-4 text-lg bg-gray-500 p-4"
                 onClick={handleLogin}
                 >Login</button>
       
        </div>
    )
}

export default Home