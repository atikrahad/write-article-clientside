import { Link } from "react-router-dom";


const Errorpage = () => {
    return (
        <div className="h-screen flex items-center justify-center">
            <div className="flex flex-col items-center justify-center">
                <img className="w-40" src="https://img.freepik.com/premium-vector/404-error-page-found-web-page-design-vector-illustration_620585-1520.jpg?w=740" alt="" />
                <p className="font-bold text-center">Unfortunately you had looking for wrong page</p>
                <Link to="/"><button className="bg-sky-600 text-white font-semibold py-2 my-5 px-3 rounded-md">Go back home</button></Link>
            </div>
        </div>
    );
};

export default Errorpage;