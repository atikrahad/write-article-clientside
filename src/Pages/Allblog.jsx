import {  useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Blogdata from "../Components/Blogdata";
import bannerimg from "../assets/Image/banner.jpg";



import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const Allblog = () => {
  const { count } = useLoaderData();
  
  const [pagesize, setPagesize] = useState(5);
  const [curentpage, setCurrentpage] = useState(1);
  const [blogsdata, setBlogsdata] = useState([]);
  const [filter, setFilter] = useState("All");
  const [searchi, setSearchi] = useState("");

  


  const pagescount = Math.ceil(count / pagesize);
  let pages = [];
  for (let i = 1; i <= pagescount; i++) {
    pages.push(i);
  }
  const handleChange = (e) => {
    const selected = parseInt(e.target.value);
    setPagesize(selected);
    setCurrentpage(1);
  };

  const handleFilter = (e) => {
    const selected = e.target.value;
    setFilter(selected);
    setSearchi("");
  };
  const handlesearchBytitle = (e) => {
    e.preventDefault();
    const form = e.target;
    const searchinput = form.text.value;
    form.reset();
    setSearchi(searchinput);
  };

  

  useEffect(() => {
    axios.get(
      `https://blogsite-server.vercel.app/allpost?category=${filter}&page=${curentpage}&size=${pagesize}&title=${searchi}`,
      
    )
      
      .then((data) => {
        setBlogsdata(data.data);
      });
  }, [curentpage, pagesize, filter, searchi]);


  
  
  
  
const handleBookmark = (data) => {

  fetch(`https://blogsite-server.vercel.app/wishlist`)
        .then(res => res.json())
        .then(wdata => {
          const finded = wdata.find(item => item._id === data._id)
            
          if(!finded){
      
            axios.post("https://blogsite-server.vercel.app/wishlist", data).then((res) => {
              console.log(res.data);
              toast.success("Added wishlist", {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                
              });
              
            });
          }
            
          else{
            toast.warn('Already added', {
              position: "bottom-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
              });
            return
          }
        }) 
  };

  return (
    <div>
      <div
        style={{
          background: `linear-gradient(to bottom, rgba(226, 232, 240, .999999999), rgba(117, 19, 93, 0.3)), url(${bannerimg})`,
          backgroundSize: "cover",
        }}
        className=" w-full min-h-[600px] flex items-center "
      >
        <div className="flex py-20 items-center justify-center mx-auto max-w-7xl">
          <div className="flex flex-col items-center space-y-3 justify-center">
            <h2 className="text-center font-bold text-xl md:w-4/6">
              Embark on a quest through a virtual library of captivating blog
              posts, where knowledge meets inspiration at the click of a button.
            </h2>
            <form onSubmit={handlesearchBytitle}>
              <input
                type="text"
                name="text"
                className="py-2 outline-none rounded-l-md px-3"
                placeholder="search blog"
              />
              <input
                type="submit"
                className="bg-sky-600 py-2 px-3 text-white rounded-r-md"
                value="search"
              />
            </form>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto flex pt-20 pb-5 items-center justify-end">
        <p className="font-bold">Filter by category</p>
        <select
          onChange={handleFilter}
          value={filter}
          className="border-2 rounded-md"
          name=""
          id=""
        >
          <option value="All">All</option>
          <option value="Helth">Helth</option>
          <option value="Programing">Programing</option>
          <option value="Sport">Sport</option>
          <option value="Tour">Tour</option>
        </select>
      </div>

      <div className="grid gap-5 py-5 lg:grid-cols-2 grid-cols-1 max-w-7xl mx-auto">
        {blogsdata.map((data) => (
          <Blogdata
            key={data._id}
            data={data}
            handleBookmark={handleBookmark}
          ></Blogdata>
        ))}
      </div>

      <div className="text-center flex flex-wrap items-center gap-3 justify-center">
        <button
          onClick={() => curentpage >= 2 && setCurrentpage(curentpage - 1)}
        >
          Prev
        </button>
        {pages.map((data) => (
          <Link key={data}>
            <button
              onClick={() => setCurrentpage(data)}
              className={
                curentpage === data ? "bg-sky-600 btn" : "btn bg-slate-400"
              }
            >
              {data}
            </button>
          </Link>
        ))}
        <button
          onClick={() =>
            curentpage <= pagescount - 1 && setCurrentpage(curentpage + 1)
          }
        >
          Next
        </button>
        <div className="flex items-center">
          <h1>Item per page</h1>

          <select onChange={handleChange} value={pagesize} id="">
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="20">20</option>
          </select>
        </div>
        <ToastContainer></ToastContainer>
      </div>
    </div>
  );
};

export default Allblog;
