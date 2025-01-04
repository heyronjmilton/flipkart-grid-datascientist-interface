import { Link } from "react-router-dom"


function Home(){
    return(
        <div className="bg-[#1C1917] flex flex-col space-y-4 items-center justify-center h-screen">

            <h1 className="text-5xl text-white font-extrabold ">Choose an Option    </h1>
            <button className="bg-[#2563EB] w-40 p-1 shadow-2xl rounded-lg text-2xl font-bold">
                <Link to='/data-review'>
                    Data Review
                </Link>
            </button>
            
            <button className="bg-[#2563EB] w-50 p-1 rounded-lg text-2xl font-bold">
                <Link to="/data-analysis">
                    Dataset Analysis
                </Link>
            </button>

            <button className="bg-[#2563EB] w-50 p-1 rounded-lg text-2xl font-bold">
                <Link to="/upload">
                    Add New Class
                </Link>
            </button>
        </div>
    )
}

export default Home