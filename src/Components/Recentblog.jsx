import { useEffect, useState } from "react";
import Recentcart from "./Recentcart";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const Recentblog = () => {
  const [loadrecent, setloadrecent] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/recentpost")
      .then((res) => res.json())
      .then((data) => setloadrecent(data));
  }, []);

  const handleBookmark = (data) => {
    fetch(`http://localhost:5000/wishlist`)
      .then((res) => res.json())
      .then((wdata) => {
        const finded = wdata.find((item) => item._id === data._id);

        if (!finded) {
          axios.post("http://localhost:5000/wishlist", data).then((res) => {
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
        } else {
          toast.warn("Already added", {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
          return;
        }
      });
  };

  return (
    <div className="max-w-7xl py-10 mx-auto">
      <h1 className="text-4xl font-semibold">Recent post:</h1>
      <div className="grid gap-5 grid-cols-1 md:grid-cols-3">
        {loadrecent.map((data) => (
          <Recentcart key={data._id} data={data} handleBookmark={handleBookmark}></Recentcart>
        ))}
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Recentblog;
