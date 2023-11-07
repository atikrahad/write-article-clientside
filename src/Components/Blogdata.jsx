import PropTypes from "prop-types";

const Blogdata = ({ data }) => {
  const { title,img,  } = data;
  return (
    <div>
      <div className="card card-side bg-base-100 shadow-xl">
        <figure>
          <img
            src={img}
            className="h-40 w-40"
            alt="Movie"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>Click the button to watch on Jetflix app.</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Watch</button>
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
