import { useLoaderData } from "react-router-dom";

const Blogdetails = () => {
  const { result } = useLoaderData();
  const {
    title,
    img,
    category,
    _id,
    pic,
    email,
    currentdate,
    name,
    sort_description,
    description,
  } = result;

  
  return (
    <div className="max-w-7xl py-10 border mx-auto">
      <div className="flex gap-3 py-3 items-center justify-start">
        <img src={pic} className="w-10 rounded-full" alt="" />
        <div>
          <h1 className="text-2xl">{name}</h1>
          <div className="flex gap-3 items-center">
          <p className="bg-green-500 rounded-md text-white px-2">{category}</p>
          <p>{currentdate.split()[0].slice(0, 10)}</p>
          </div>
        </div>
      </div>
      <img src={img} className="w-full" alt="" />
      <h1 className="text-3xl py-5 font-bold">{title}</h1>
      <h2 className="text-2xl py-3 font-semibold">{sort_description}</h2>
      <p>{description}</p>
    </div>
  );
};

export default Blogdetails;
