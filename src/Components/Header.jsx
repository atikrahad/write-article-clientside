import bannerimg from "../assets/Image/banner.jpg";
const Header = () => {
  return (
    <div
      style={{
        background: `linear-gradient(to bottom, rgba(226, 232, 240, .999999999), rgba(117, 19, 93, 0.3)), url(${bannerimg})`,
        backgroundSize: "cover",
      }}
      className=" w-full"
    >
      <div className="flex py-20 items-center  mx-auto max-w-7xl">
      <div className="space-y-5 w-1/2">
        
        <h1 className="text-4xl tracking-tighter font-bold">
          Exploring the World of Knowledge
        </h1>
        <p className="md:w-4/6 font-medium">
          Dive into a world of thought-provoking articles, expert insights, and
          fascinating stories. Join us on a journey to expand your horizons and
          discover the wonders of the digital realm.
        </p>
      </div>
      
      </div>
    </div>
  );
};

export default Header;
