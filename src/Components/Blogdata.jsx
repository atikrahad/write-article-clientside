import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { BsBookmarkPlus } from "react-icons/bs";
import { useContext } from "react";
import { Authinfo } from "../Shared-Component/Authprovider";

const Blogdata = ({ data, handleBookmark }) => {
  const { title,img,category,_id, sort_description,  } = data;
  const {setIds} = useContext(Authinfo)
    setIds(_id)
  return (
    <div>
      <div className="card card-side lg:h-60 bg-base-100 shadow-xl">
        <figure className="lg:w-40 ">
          <img
            src={img}
            className="w-24 h-full md:w-full"
            alt=""
          />
        </figure>
        <div className="flex w-[70%] m-2 md:p-5 pr-2 flex-col items-start justify-between">

          <h2 className="text-base md:text-xl font-bold">{title}</h2>
          <p className="py-1 px-3 bg-green-500 rounded-md text-white ">{category}</p>
          <p className="text-justify">{sort_description}</p>
          <div className="w-full flex items-center justify-between">
            <div><Link to={`/blogdetails/${_id}`} className="font-bold text-sky-600">Read more</Link></div>
            <button onClick={()=>handleBookmark(data)}><BsBookmarkPlus></BsBookmarkPlus></button>
          </div>
        </div>
      </div>
    </div>
  );
};
Blogdata.propTypes = {
  data: PropTypes.object.isRequired,
  handleBookmark: PropTypes.func
};
export default Blogdata;
