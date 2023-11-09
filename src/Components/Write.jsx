import { Link } from "react-router-dom";
import img from "../assets/Image/write.jpg"

const Write = () => {
    return (
        <div className="max-w-7xl py-10 mx-auto flex flex-col md:flex-row items-center justify-between">
            <img src={img} className="md:w-1/2 rounded-md w-[95vw] h-96 md:h-[80vh]" alt="" />
            <div className="md:w-1/2 p-10 space-y-3">
                <h1 className="text-2xl font-bold md:text-4xl">Share your knowledge</h1>
                <h1 className="text-xl font-medium">Join our vibrant community of contributors and readers who share a common passion for these diverse and enriching subjects. Whether you're looking to learn something new, share your expertise, or simply be inspired, our blog site is the perfect space to connect, explore, and celebrate the multifaceted beauty of life."</h1>
                <Link to="/addblog"><button className="bg-sky-600 text-white font-bold rounded-md py-2 my-3 px-3">Write now</button></Link>

            </div>
        </div>
    );
};

export default Write;