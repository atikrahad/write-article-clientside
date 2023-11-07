
import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const Allblog = () => {
  const { count } = useLoaderData();
  const [pagesize, setPagesize] = useState(5)
  const pagescount = Math.ceil(count / pagesize);
  let pages = [];
  for (let i = 1; i <= pagescount; i++) {
    pages.push(i);
  }
  const handleChange = e => {
    const selected = parseInt(e.target.value);
    setPagesize(selected)
    console.log(selected);
  }
  return (
    <div>
      <div className="text-center flex flex-wrap items-center gap-3 justify-center">
        {pages.map((data) => (
          <Link key={data}>
            <button className="btn text-center ">{data}</button>
          </Link>
        ))}
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
