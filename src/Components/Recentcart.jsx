import PropTyoes from "prop-types";
import { Link } from "react-router-dom";
import { BsBookmarkPlus } from "react-icons/bs";

const Recentcart = ({ data, handleBookmark }) => {
  const { title, img, category, _id, sort_description } = data;
  return (
    <div className="card relative rounded-md bg-base-100 shadow-xl">
      <figure className="">
        <img className="w-full h-60"
          src={img}
          alt=""
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <button className="bg-[#0080009d] text-white absolute px-1 left-2 top-2 rounded-md  cursor-text">{category}</button>
        <p>{sort_description}</p>
        <div className="flex items-center justify-between">
          <div><Link className="text-sky-600 font-semibold" to={`/blogdetails/${_id}`}>Read more</Link></div>
          <button onClick={()=>handleBookmark(data)}><BsBookmarkPlus></BsBookmarkPlus></button>
          
        </div>
      </div>
    </div>
  );
};
Recentcart.propTypes = {
  data: PropTyoes.object.isRequired,
  handleBookmark: PropTyoes.func
};
export default Recentcart;
