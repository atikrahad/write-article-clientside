import { useEffect, useState } from "react";
import Selected from "../Components/Selected";

const Wishlist = () => {
  const [loaddata, setLoaddata] = useState([]);

  useEffect(() => {
    fetch(`https://blogsite-server-1psfon91z-atikrahad1-gmailcom.vercel.app/wishlist`)
      .then((res) => res.json())
      .then((data) => {
        setLoaddata(data);
      });
  }, []);

  const handleRemove = (id) => {
    console.log(id);
    fetch(`https://blogsite-server-1psfon91z-atikrahad1-gmailcom.vercel.app/wishlist/${id}`, {
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
    <div className="max-w-7xl min-h-full mx-auto">
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
