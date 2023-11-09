import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const Selected = ({ data,handleRemove }) => {
  const { title, img, category, _id, sort_description } = data;
  return (
    <div>
      <div className="card card-side lg:h-60 bg-base-100 shadow-xl">
        <figure className="lg:w-60 w-20">
          <img src={img} className="h-full w-full" alt="" />
        </figure>
        <div className="flex w-[70%] p-5 pr-2 flex-col items-start justify-between">
          <h2 className="md:text-xl text-xs font-bold">{title}</h2>
          <p className=" px-2 py-1 bg-green-500 text-xs md:text-xl rounded-md text-white ">
            {category}
          </p>
          <p className="text-justify md:text-base text-xs">{sort_description}</p>
          <div className="w-full flex items-center justify-between">
            <div className="flex items-center w-full justify-between">
              <div>
              <Link
                to={`/blogdetails/${_id}`}
                className="font-bold text-xs md:text-base text-sky-600"
              >
                Read more
              </Link>
              </div>
              <button onClick={()=>handleRemove(_id)} className="bg-orange-500 rounded-md my-1 px-2">remove</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
Selected.propTypes = {
  data: PropTypes.object,
  handleRemove: PropTypes.func
};
export default Selected;
