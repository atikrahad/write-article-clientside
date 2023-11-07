

import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Blogdata from "../Components/Blogdata";

const Allblog = () => {
  const { count } = useLoaderData();
  const [pagesize, setPagesize] = useState(5)
  const [curentpage, setCurrentpage] = useState(1)
  const [blogsdata,setBlogsdata] = useState([])
  const pagescount = Math.ceil(count / pagesize);
  let pages = [];
  for (let i = 1; i <= pagescount; i++) {
    pages.push(i);
  }
  const handleChange = e => {
    const selected = parseInt(e.target.value);
    setPagesize(selected)
    setCurrentpage(1)
  }


  useEffect(()=>{
    fetch(`http://localhost:5000/allpost?page=${curentpage}&size=${pagesize}`)
    .then(res=> res.json())
    .then(data=> setBlogsdata(data))
  },[curentpage, pagesize])

  return (
    <div>

        <div className="grid gap-5 py-5 lg:grid-cols-2 grid-cols-1 max-w-7xl mx-auto">
            {
                blogsdata.map(data => <Blogdata key={data._id} data={data}></Blogdata>)
            }
        </div>


      <div className="text-center flex flex-wrap items-center gap-3 justify-center">
        <button onClick={()=> curentpage>=2 && setCurrentpage(curentpage-1)}>Prev</button>
        {pages.map((data) => (
          <Link key={data}>
            <button onClick={()=> setCurrentpage(data)} className={curentpage===data? 'bg-sky-600 btn':'btn bg-slate-400'}>{data}</button>
          </Link>
        ))}
        <button onClick={()=> curentpage<=pagescount-1 && setCurrentpage(curentpage+1)}>Next</button>
        <div className="flex items-center">
          <h1>Item per page</h1>
          
          <select onChange={handleChange} value={pagesize}  id="">
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="20">20</option>
          </select>
          
        </div>
      </div>
    </div>
  );
};

export default Allblog;
