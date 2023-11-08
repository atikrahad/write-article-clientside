import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { BsBookmarkPlus } from "react-icons/bs";

const Blogdata = ({ data }) => {
  const { title,img,category,_id, sort_description,  } = data;
  return (
    <div>
      <div className="card card-side lg:h-60 bg-base-100 shadow-xl">
        <figure className="lg:w-40 ">
          <img
            src={img}
            className="h-full w-full"
            alt=""
          />
        </figure>
        <div className="flex w-[70%] p-5 pr-2 flex-col items-start justify-between">

          <h2 className="text-xl font-bold">{title}</h2>
          <p className="py-1 px-3 bg-green-500 rounded-md text-white ">{category}</p>
          <p className="text-justify">{sort_description}</p>
          <div className="w-full flex items-center justify-between">
            <div><Link to={`/blogdetails/${_id}`} className="font-bold text-sky-600">Read more</Link></div>
            <button><BsBookmarkPlus></BsBookmarkPlus></button>
          </div>
        </div>
      </div>
    </div>
  );
};
Blogdata.propTypes = {
  data: PropTypes.object.isRequired,
};
export default Blogdata;
