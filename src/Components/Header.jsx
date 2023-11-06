import bannerimg from "../assets/Image/banner.jpg";
const Header = () => {
  return (
    <div
      style={{
        background: `linear-gradient(to bottom, rgba(226, 232, 240, .999999999), rgba(117, 19, 93, 0.3)), url(${bannerimg})`,
        backgroundSize: "cover",
      }}
      className=" w-full max-h-[60vh]"
    >
      <div className="flex py-20 items-center  mx-auto max-w-7xl">
      <div className="space-y-5">
        
        <h1 className="text-4xl tracking-tighter font-bold">
          Exploring the World of Knowledge
        </h1>
        <p className="md:w-4/6 font-medium">
          Dive into a world of thought-provoking articles, expert insights, and
          fascinating stories. Join us on a journey to expand your horizons and
          discover the wonders of the digital realm.
        </p>
      </div>
      <div className="flex flex-col items-center space-y-3 justify-center">
        <h2 className="text-center font-bold text-xl md:w-4/5">
          Embark on a quest through a virtual library of captivating blog posts,
          where knowledge meets inspiration at the click of a button.
        </h2>
        <form>
            <input type="text" className="py-2 outline-none rounded-l-md px-3" placeholder="search blog" />
            <input type="submit" className="bg-sky-600 py-2 px-3 text-white rounded-r-md" value="search" />
        </form>
      </div>
      </div>
    </div>
  );
};

export default Header;
