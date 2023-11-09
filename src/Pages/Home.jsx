import Category from "../Components/Category";
import Header from "../Components/Header";
import Recentblog from "../Components/Recentblog";
import img from "../assets/Image/8850917.jpg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Write from "../Components/Write";

import './Homeanimate.css'

const Home = () => {
  

  const handleNewslatter = (e) => {
    e.preventDefault();
    e.target.reset();
    toast.success("Thank you for subscribing to our newsletter", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  
  
  return (
    <div>
      
        <Header></Header>

        <Recentblog></Recentblog>

        <Category></Category>

        <Write></Write>

        <div
          style={{
            background: `linear-gradient(to bottom, rgba(226, 232, 240, .999999999), rgba(117, 19, 93, 0.3)), url(${img})`,
            backgroundSize: "cover",
          }}
          className="max-w-7xl my-10 rounded-lg flex flex-col items-center justify-center mx-auto h-60"
        >
          <h1 className=" text-2xl md:text-4xl py-3 font-bold text-center">
            Get news for new blog post
          </h1>
          <form onSubmit={handleNewslatter} action="">
            <input
              type="email"
              required
              className="py-2 w-40 md:w-auto px-4 rounded-l-md"
              placeholder="email"
            />
            <input
              type="submit"
              className="py-2 px-3 rounded-r-md bg-sky-600 text-white"
              value="Subscribe"
            />
          </form>
          <ToastContainer></ToastContainer>
        </div>
      
    </div>
  );
};

export default Home;
