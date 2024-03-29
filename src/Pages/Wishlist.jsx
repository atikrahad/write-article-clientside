import { useEffect, useState } from "react";
import Selected from "../Components/Selected";
import axios from "axios";

const Wishlist = () => {
  const [loaddata, setLoaddata] = useState([]);

  useEffect(() => {
    axios.get(`https://blogsite-server.vercel.app/wishlist`)
      
      .then((data) => {
        setLoaddata(data.data);
      });
  }, []);

  const handleRemove = (id) => {
    console.log(id);
    fetch(`https://blogsite-server.vercel.app/wishlist/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const remaining = loaddata.filter((data) => data._id !== id);
        setLoaddata(remaining);
      });
  };

  return (
    <div className="max-w-7xl min-h-[500PX] mx-auto">
      {loaddata.length === 0 && (
        <div className="text-center h-full flex items-center justify-center">
          <h1 className="text-orange-500 text-3xl font-bold">
            You have not added any blog in your wishlist
          </h1>
        </div>
      )}
      {loaddata.map((data) => (
        <Selected key={data} data={data} handleRemove={handleRemove}></Selected>
      ))}
    </div>
  );
};

export default Wishlist;
